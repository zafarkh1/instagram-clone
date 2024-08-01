import { Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo
} from "../../assets/constants";

import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const authUser = useAuthStore(state => state.user)

  const { isLoggingOut, handleSignOut } = useLogout();

  return (
    <Box
      h={"100vh"}
      position={"sticky"}
      top={0}
      left={0}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
        <Link
          top={"/"}
          as={RouterLink}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          top={"/"}
          as={RouterLink}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          p={2}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
         <SidebarItems/>
        </Flex>
        <Tooltip
          hasArrow
          label="Log out"
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleSignOut}
            alignItems={"center"}
            _hover={{ bg: "whiteAlpha.400" }}
            gap={4}
            p={2}
            borderRadius={6}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Log out
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
