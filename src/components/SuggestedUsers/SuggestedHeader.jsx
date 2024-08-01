import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { isLoggingOut, handleSignOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`${authUser?.username}`}>
            <Avatar src={authUser?.profilePicURL} size={"lg"} />
          </Link>
          <Link to={`${authUser.username}`}>
            <Text fontSize={12} fontWeight={"bold"}>
              {authUser?.username}
            </Text>
          </Link>
        </Flex>
        <Button
          size={"xs"}
          bg={"transparent"}
          _hover={{ background: "transparent" }}
          color={"blue.500"}
          fontWeight={"bold"}
          cursor={"pointer"}
          p={0}
          fontSize={14}
          transition={"0.2s ease-in-out"}
          isLoading={isLoggingOut}
          onClick={handleSignOut}
        >
          Log out
        </Button>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        my={2}
      >
        <Text color={"gray.500"} fontWeight={"bold"} fontSize={12}>
          Suggested for you
        </Text>
        <Text
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
          fontWeight={"bold"}
          fontSize={12}
        >
          See All
        </Text>
      </Flex>
    </>
  );
};

export default SuggestedHeader;
