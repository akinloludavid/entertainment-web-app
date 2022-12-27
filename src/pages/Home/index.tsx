import React, { ChangeEvent } from "react";
import {
  Box,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/react";
// import db from "../../db.json";
import db from "../../data.json";
import TrendingCard from "../../components/TrendingCard";
import MovieCard from "../../components/MovieCard";
import GridContainer from "../../components/GridContainer";
import GlobalSearchInput from "../../components/GlobalSearchInput";
import { movieTitleSelector, useStore } from "../../zust/store";
import { useState } from "react";
import { motion } from "framer-motion";
const Home = () => {
  const trendingMovies = db.filter((el) => el.isTrending);
  const movieTitle = useStore((state) => state.movieTitle);
  const recommendedMovies = useStore((state) => state.recommendedMovies);
  const setMovieTitle = useStore(movieTitleSelector);
  const addToBookMark = useStore((state) => state.addToBookMark);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(e.target.value);
  };
  const [label, setLabel] = useState("Floating input");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <>
      <GlobalSearchInput
        value={movieTitle}
        placeholder="Search for movies or TV series"
        onChange={handleChange}
      />
      <Box mt={"34px"}>
        {!movieTitle && (
          <>
            <Heading variant={"h1"} mb={["34px"]}>
              Trending
            </Heading>
            <Grid
              gap="36px"
              overflowX={"scroll"}
              // maxW="1240px"
              templateColumns={`repeat(${trendingMovies.length}, 1fr)`}
            >
              {trendingMovies.map((el) => (
                <GridItem w={["240px", "470px"]} key={el.title}>
                  <TrendingCard
                    bgImage={
                      el.thumbnail.trending?.large ||
                      el.thumbnail.trending?.small
                    }
                    year={el.year}
                    title={el.title}
                    rating={el.rating}
                    category={el.category}
                    isBookMarked={el.isBookmarked}
                  />
                </GridItem>
              ))}
            </Grid>
          </>
        )}
        <Box mt="40px" w={["100%", "100%", "90%", "98%"]} maxW="1240px">
          {movieTitle ? (
            <Heading mb={["34px"]} variant="h1">
              Found {recommendedMovies.length}{" "}
              {recommendedMovies.length > 1 ? "results" : "result"} for '
              {movieTitle}'
            </Heading>
          ) : (
            <Heading variant={"h1"} mb={["34px"]}>
              Recommended for you
            </Heading>
          )}
          <GridContainer>
            {recommendedMovies.map((el) => (
              <GridItem key={el.title}>
                <MovieCard
                  {...el}
                  bgImage={el.thumbnail.regular.large}
                  year={el.year}
                  title={el.title}
                  rating={el.rating}
                  category={el.category}
                  isBookMarked={el.isBookmarked}
                />
              </GridItem>
            ))}
          </GridContainer>
        </Box>
      </Box>
    </>
  );
};

export default Home;
