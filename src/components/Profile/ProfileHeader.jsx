import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text, useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(userProfile?.uid);

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

  return (
    <Flex
      direction={{base: "column", sm: "row"}}
      gap={{base: 4, sm: 10}}
      py={10}
    >
      <AvatarGroup
        size={{base: "xl", md: "2xl"}}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={userProfile.profilePicURL} name="Profile img"/>
      </AvatarGroup>

      <VStack alignItems={"flex-start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          direction={{base: "column", sm: "row"}}
          gap={4}
          justifyContent={{base: "center", sm: "flex-start"}}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{base: "sm", md: "lg"}}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
              <Button
                bg={"white"}
                color={"black"}
                size={{base: "xs", md: "sm"}}
                _hover={{bg: "whiteAplha.800"}}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
              <Button
                bg={"blue.500"}
                color={"white"}
                size={{base: "xs", md: "sm"}}
                _hover={{bg: "blue.600"}}
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.posts?.length}
            </Text>
            Posts
          </Text>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.followers?.length}
            </Text>
            Followers
          </Text>
          <Text fontSize={{base: "xs", md: "sm"}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {userProfile.following?.length}
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullName}
          </Text>
        </Flex>
        <Text fontSize={"sm"}>{userProfile.bio}</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  );
};

export default ProfileHeader
