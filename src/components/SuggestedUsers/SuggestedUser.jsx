import React, { useState } from "react";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

const SuggestedUser = ({ avatar, username, followers }) => {
  const [isFollowed, setIsFollowed] = useState(true);
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        my={4}
        w={"full"}
      >
        <Flex gap={3} alignItems={"center"}>
          <Avatar src={avatar} size={"md"} name={username} />
          <Flex direction={"column"} alignItems={"flex-start"}>
            <Text fontSize={12} fontWeight={"bold"}>
              {username}
            </Text>
            <Text fontSize={11} color={"gray.500"}>
              {followers} followers
            </Text>
          </Flex>
        </Flex>
        <Button
          color={"blue.400"}
          bg={"transparent"}
          fontWeight={"medium"}
          p={0}
          fontSize={13}
          _hover={{ color: "white" }}
          cursor={"pointer"}
          h={"max-content"}
          transition={"0.2s ease-in-out"}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Follow" : "Unfollow"}
        </Button>
      </Flex>
    </>
  );
};

export default SuggestedUser;
