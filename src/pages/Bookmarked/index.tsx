import React, { ChangeEvent } from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import GridContainer from "../../components/GridContainer";
import { bookMarkTitleSelector, useStore } from "../../zust/store";
import GlobalSearchInput from "../../components/GlobalSearchInput";
const Bookmarked = () => {
  const bookmarkedMovies = useStore((state) => state.bookMarkedMovies);
  const bookmarkedSeries = useStore((state) => state.bookMarkedSeries);
  const bookMarkTitle = useStore((state) => state.bookMarkTitle);
  const setBookMarkTitle = useStore(bookMarkTitleSelector);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookMarkTitle(e.target.value);
  };
  return (
    <>
      <GlobalSearchInput
        placeholder="Search for bookmarked shows"
        value={bookMarkTitle}
        onChange={handleChange}
      />
      <Box maxW="1240px">
        {bookMarkTitle ? (
          <Heading mb={["34px"]} mt="34px" variant="h1">
            Found {bookmarkedMovies.length}{" "}
            {bookmarkedMovies.length > 1 ? "results" : "result"} for '
            {bookMarkTitle}'
          </Heading>
        ) : (
          <Heading mb="38px" mt="34px" variant={"h1"}>
            Bookmarked Movies
          </Heading>
        )}

        <Grid
          templateColumns={["repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
          rowGap="32px"
          columnGap={"40px"}
          w="100%"
        >
          {bookmarkedMovies.map((el) => (
            <GridItem key={el.title}>
              <MovieCard
                bgImage={el.thumbnail.regular.large}
                year={el.year}
                title={el.title}
                rating={el.rating}
                category={el.category}
                isBookMarked={el.isBookmarked}
              />
            </GridItem>
          ))}
        </Grid>
        {bookMarkTitle ? (
          <Heading mb={["34px"]} mt="34px" variant="h1">
            Found {bookmarkedSeries.length}{" "}
            {bookmarkedSeries.length > 1 ? "results" : "result"} for '
            {bookMarkTitle}'
          </Heading>
        ) : (
          <Heading mb="38px" mt="34px" variant={"h1"}>
            Bookmarked TV Series
          </Heading>
        )}
        <GridContainer>
          {bookmarkedSeries.map((el) => (
            <GridItem key={el.title}>
              <MovieCard
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
    </>
  );
};

export default Bookmarked;
