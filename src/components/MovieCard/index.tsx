import React from "react";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { ITrendingCard } from "../../types";
import { addToBookMarkSelector, useStore } from "../../zust/store";

const MovieCard = (props: any) => {
  const { year, category, rating, title, bgImage, isBookMarked } = props;
  const addToBookMark = useStore(addToBookMarkSelector);
  return (
    <Flex flexDir={"column"} gap="8px">
      <Box
        w={["max(100%, 164px)", "max(100%, 164px)", "max(100%,220px)", "100%"]}
        h={["110px", "174px", "174px", "174px"]}
        borderRadius={"8px"}
        p="16px"
        backgroundImage={`url(${bgImage})`}
        backgroundPosition="top"
        sx={{
          "@media (max-width:360px)": {
            h: "174px",
          },
        }}
      >
        <Box
          ml="auto"
          bgColor={"mainBgColor"}
          rounded="full"
          opacity={0.5}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          w="32px"
          h="32px"
          cursor={"pointer"}
          onClick={() => addToBookMark(props)}
        >
          {isBookMarked ? (
            <Icon as={MdBookmark} color="#fff" opacity={1} />
          ) : (
            <Icon as={MdBookmarkBorder} color="#fff" />
          )}
        </Box>
      </Box>
      <Box mt="auto" mr="auto">
        <Flex align={"center"} gap="8px">
          <Text variant={"lightText"} fontSize={"15px"}>
            {year}
          </Text>
          <Box
            w="3px"
            h="3px"
            bgColor={"white"}
            opacity="0.5"
            rounded={"full"}
          ></Box>
          <Flex align={"center"} gap="6px">
            {/* <FilmIcon /> */}
            <RiFilmFill color="#fff" opacity={"0.5"} />
            <Text variant={"lightText"} fontSize={"15px"}>
              {category}
            </Text>
          </Flex>
          <Box
            w="3px"
            h="3px"
            bgColor={"white"}
            opacity="0.5"
            rounded={"full"}
          ></Box>

          <Text variant={"lightText"} fontSize={"15px"}>
            {rating}
          </Text>
        </Flex>
        <Heading variant={"h4"} mt="5px">
          {title}
        </Heading>
      </Box>
    </Flex>
  );
};

export default MovieCard;
