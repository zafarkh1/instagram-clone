import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import { useLocation } from "react-router-dom";

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const { pathname } = useLocation();

  const handleLiked = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLiked} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      {pathname === "/" ? (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}{" "}
            <Text as={"span"} fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View 1000 comments
          </Text>
        </>
      ) : null}
      <Flex
        justifyContent={"space-between"}
        gap={2}
        alignItems={"center"}
        w={"full"}
      >
        <InputGroup>
          <Input
            placeholder="Add a comment ..."
            fontSize={14}
            variant={"flushed"}
          />
          <InputRightElement>
            <Button
              color={"blue.500"}
              fontSize={14}
              _hover={{ color: "white" }}
              bg={"transparent"}
              cursor={"pointer"}
              fontWeight={600}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
