import React from "react";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { ITrendingCard } from "../../types";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { FilmIcon } from "../../icons";
const TrendingCard = ({
  bgImage,
  title,
  year,
  category,
  rating,
  isBookMarked,
}: ITrendingCard) => {
  return (
    <Flex
      flexDirection={"column"}
      borderRadius="8px"
      backgroundImage={`url(${bgImage})`}
      p={["24px"]}
      pt="16px"
      w={"100%"}
      h={["140px", "230px"]}
      alignItems={"center"}
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
      >
        {isBookMarked ? (
          <Icon as={MdBookmark} color="#fff" />
        ) : (
          <Icon as={MdBookmarkBorder} color="#fff" />
        )}
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
        <Heading variant={"h3"}>{title}</Heading>
      </Box>
    </Flex>
  );
};

export default TrendingCard;
