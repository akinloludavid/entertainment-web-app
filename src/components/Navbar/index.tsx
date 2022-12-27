import React from "react";
import { Box, Flex, Image, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  BookmarkIcon,
  FilmIcon,
  Logo,
  TrendIcon,
  TvIcon,
  User,
} from "../../icons";
import { HOME, MOVIES, SERIES, BOOKMARKED } from "../../routes/constants";
import { isNavActive } from "../../utils/helpers";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      borderRadius={["0px", "8px"]}
      bgColor="secBgColor"
      h="72px"
      align={"center"}
      w={["100vw", "100%"]}
      justify={"space-between"}
      mx={["-16px", "auto"]}
      mb="33px"
      px="24px"
    >
      <Box onClick={() => navigate("/")}>
        <Logo />
      </Box>
      <Flex align={"center"} gap="32px">
        <Box cursor={"pointer"} onClick={() => navigate(HOME)}>
          <TrendIcon color={isNavActive(HOME) ? "#FFF" : "#5a698f"} />
        </Box>
        <Box cursor={"pointer"} onClick={() => navigate(MOVIES)}>
          <FilmIcon color={isNavActive(MOVIES) ? "#FFF" : "#5a698f"} />
        </Box>
        <Box cursor={"pointer"} onClick={() => navigate(SERIES)}>
          <TvIcon color={isNavActive(SERIES) ? "#FFF" : "#5a698f"} />
        </Box>
        <Box cursor={"pointer"} onClick={() => navigate(BOOKMARKED)}>
          <BookmarkIcon color={isNavActive(BOOKMARKED) ? "#FFF" : "#5a698f"} />
        </Box>
      </Flex>
      <Image
        cursor={"pointer"}
        src={User}
        alt="user icon"
        w={["24px", "auto"]}
      />
    </Flex>
  );
};

export default Navbar;
