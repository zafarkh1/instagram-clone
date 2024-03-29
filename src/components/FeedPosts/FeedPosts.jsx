import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading &&
          [0, 1, 2, 3].map((_, index) => (
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton w={"200px"} height={"10px"}></Skeleton>
                  <Skeleton w={"200px"} height={"10px"}></Skeleton>
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>contents wrapped</Box>
              </Skeleton>
            </VStack>
          ))}
      </Container>
      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="freya" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="harry" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="grace" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="jack" avatar="/img4.png" />
        </>
      )}
    </>
  );
};

export default FeedPosts;
