import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="user photo" size={"sm"} />
        <Flex gap={2} fontSize={12} fontWeight={"bold"}>
          {username}
          <Box color={"gray.500"}>• 1week</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          color={"blue.500"}
          fontWeight={"bold"}
          fontSize={12}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
