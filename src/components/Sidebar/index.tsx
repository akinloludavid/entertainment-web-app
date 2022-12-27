import React from "react";
import { Box, Flex, Icon, Image, Tooltip } from "@chakra-ui/react";
import {
  BookmarkIcon,
  FilmIcon,
  Logo,
  TrendIcon,
  TvIcon,
  User,
} from "../../icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isNavActive } from "../../utils/helpers";
import { BOOKMARKED, SERIES, MOVIES, HOME } from "../../routes/constants";
import useCustomMediaQuery from "../../customHooks/mediaQuery";
const SideBar = () => {
  const [iconsActive, setIconActive] = useState({
    isTrendIconActive: false,
    isFilmIconActive: false,
    isBookmarkIconActive: false,
    isTvIconActive: false,
  });
  const {
    isTrendIconActive,
    isFilmIconActive,
    isBookmarkIconActive,
    isTvIconActive,
  } = iconsActive;
  const navigate = useNavigate();
  const { isTablet } = useCustomMediaQuery();
  return (
    <Flex
      flexDirection={"column"}
      w={["72px", "72px", "72px", "96px"]}
      h="100%"
      bgColor={"secBgColor"}
      borderRadius="20px"
      alignItems={"center"}
      display={[isTablet ? "none" : "flex"]}
    >
      <Box
        mb="75px"
        mt="36px"
        cursor={"pointer"}
        onClick={() => navigate(HOME)}
      >
        <Icon as={Logo} />
      </Box>
      <Box>
        <Tooltip ml="1" label="Trends" placement="right" hasArrow>
          <Box
            mb="40px"
            cursor={"pointer"}
            onMouseEnter={(e) =>
              setIconActive({ ...iconsActive, isTrendIconActive: true })
            }
            onMouseLeave={(e) =>
              setIconActive({ ...iconsActive, isTrendIconActive: false })
            }
            onClick={() => navigate(HOME)}
          >
            <TrendIcon
              color={
                isNavActive(HOME)
                  ? "#FFF"
                  : isTrendIconActive
                  ? "#fc4747"
                  : "#5a698f"
              }
            />
          </Box>
        </Tooltip>
        <Tooltip ml="1" label="Movies" placement="right" hasArrow>
          <Box
            mb="40px"
            cursor={"pointer"}
            onMouseEnter={(e) =>
              setIconActive({ ...iconsActive, isFilmIconActive: true })
            }
            onMouseLeave={(e) =>
              setIconActive({ ...iconsActive, isFilmIconActive: false })
            }
            onClick={() => navigate(MOVIES)}
          >
            <FilmIcon
              color={
                isNavActive(MOVIES)
                  ? "#FFF"
                  : isFilmIconActive
                  ? "#fc4747"
                  : "#5a698f"
              }
            />
          </Box>
        </Tooltip>
        <Tooltip ml="1" label="Tv Series" placement="right" hasArrow>
          <Box
            mb="40px"
            cursor={"pointer"}
            onMouseEnter={(e) =>
              setIconActive({ ...iconsActive, isTvIconActive: true })
            }
            onMouseLeave={(e) =>
              setIconActive({ ...iconsActive, isTvIconActive: false })
            }
            onClick={() => navigate(SERIES)}
          >
            <TvIcon
              color={
                isNavActive(SERIES)
                  ? "#FFF"
                  : isTvIconActive
                  ? "#fc4747"
                  : "#5a698f"
              }
            />
          </Box>
        </Tooltip>
        <Tooltip ml="1" label="Bookmarks" placement="right" hasArrow>
          <Box
            mb="40px"
            cursor={"pointer"}
            onMouseEnter={(e) =>
              setIconActive({ ...iconsActive, isBookmarkIconActive: true })
            }
            onMouseLeave={(e) =>
              setIconActive({ ...iconsActive, isBookmarkIconActive: false })
            }
            onClick={() => navigate(BOOKMARKED)}
          >
            <BookmarkIcon
              color={
                isNavActive(BOOKMARKED)
                  ? "#FFF"
                  : isBookmarkIconActive
                  ? "#fc4747"
                  : "#5a698f"
              }
            />
          </Box>
        </Tooltip>
      </Box>
      <Image cursor={"pointer"} src={User} mt="auto" mb="32px" />
    </Flex>
  );
};

export default SideBar;
