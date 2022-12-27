import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IChildren } from "../../types";
import SideBar from "../Sidebar";
import GlobalSearchInput from "../GlobalSearchInput";
import Navbar from "../Navbar";
import useCustomMediaQuery from "../../customHooks/mediaQuery";

const PageLayout = ({ children }: IChildren) => {
  const { isTablet, isMiniLaptop } = useCustomMediaQuery();
  return (
    <Box bgColor={"mainBgColor"} pt={["", "23px", "23px", "32px"]}>
      <Flex
        minH="100vh"
        w="100vw"
        justify={"flex-start"}
        gap={["0px", "0px", "0px", "36px"]}
        pl={["16px", "25px", "25px", "32px"]}
        pr={["16px", "25px", "25px", "0px"]}
        overflow={"hidden"}
        maxW="1440px"
        mx="auto"
      >
        <Box h="92vh">
          <SideBar />
        </Box>
        <Box w="100%">
          {isTablet && <Navbar />}
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default PageLayout;
