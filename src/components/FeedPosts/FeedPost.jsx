import { Box, Container, Img } from "@chakra-ui/react";
import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, avatar, username }) => {
  return (
    <Container maxW={"container.sm"}>
      <PostHeader avatar={avatar} username={username} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Img src={img} name="user photo" />
      </Box>
      <PostFooter username={username} />
    </Container>
  );
};

export default FeedPost;
