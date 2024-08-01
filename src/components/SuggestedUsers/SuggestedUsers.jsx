import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { Box, Link } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <Box my={10}>
      <SuggestedHeader />
      <SuggestedUser
        avatar="https://bit.ly/dan-abramov"
        username="Dan Abramov"
        followers={1352}
      />
      <SuggestedUser
        avatar="https://bit.ly/ryan-florence"
        username="Ryan Florence"
        followers={1085}
      />
      <SuggestedUser
        avatar="https://bit.ly/code-beast"
        username="Code Beast"
        followers={1400}
      />
      <SuggestedUser avatar="/img4.png" username="Erling" followers={852} />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &#169; 2024 Built By{" "}
        <Link
          href="https://t.me/developer_plus_plus"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Zafar
        </Link>
      </Box>
    </Box>
  );
};

export default SuggestedUsers;
