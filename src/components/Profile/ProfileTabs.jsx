import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        alignItems={"center"}
        borderTop={"1px solid white"}
        p={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box>
          <BsGrid3X3 />
        </Box>
        <Text>Posts</Text>
      </Flex>

      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box>
          <BsBookmark />
        </Box>
        <Text>Saved</Text>
      </Flex>

      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box>
          <BsSuitHeart />
        </Box>
        <Text>Likes</Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
