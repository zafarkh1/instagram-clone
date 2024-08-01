
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Avatar,
  Center, Modal, ModalContent, ModalBody, ModalOverlay, ModalCloseButton,
} from '@chakra-ui/react'
import {useRef, useState} from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

export default function EditProfile({isOpen, onClose}) {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    bio: ""
  })

  const authUser = useAuthStore(state => state.user)
  const fileRef = useRef(null)
  const {selectedFile, setSelectedFile, handleImageChange} = usePreviewImg()
  const {isUpdating, editProfile} = useEditProfile()
  const showToast = useShowToast()

  const handleEditProfile = async() => {
    try {
      await editProfile(inputs, selectedFile)
      setSelectedFile(null)
      onClose()
    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
        <ModalCloseButton/>
        <ModalBody>
          <Flex
            bg={"black"}>
            <Stack
              spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
              <Heading lineHeight={1.1} fontSize={{base: '2xl', sm: '3xl'}}>
                Edit Profile
              </Heading>
              <FormControl>
                <Stack direction={["column", "row"]} spacing={6}>
                  <Center>
                    <Avatar
                      size='xl'
                      border={"2px solid white "}
                      src={selectedFile || authUser.profilePicURL}
                    />
                  </Center>
                  <Center w='full'>
                    <Button w='full' onClick={() => fileRef.current.click()}>
                      Edit Profile Picture
                    </Button>
                  </Center>
                  <Input type='file' hidden ref={fileRef} onChange={handleImageChange}/>
                </Stack>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                <Input
                  placeholder={"Full Name"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.fullName || authUser.fullName}
                  onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder={"Username"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.username || authUser.username}
                  onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input
                  placeholder={"Bio"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.bio || authUser.bio}
                  onChange={e => setInputs({...inputs, bio: e.target.value})}
                />
              </FormControl>
              <Stack spacing={6} direction={['column', 'row']}>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w='full'
                  size='sm'
                  _hover={{bg: "red.500"}}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  size='sm'
                  w='full'
                  _hover={{bg: "blue.500"}}
                  onClick={handleEditProfile}
                  isLoading={isUpdating}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
