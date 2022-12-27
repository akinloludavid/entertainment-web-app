import React, { ChangeEvent } from "react";
import { Box, GridItem, Heading } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import GridContainer from "../../components/GridContainer";
import { movieTitleSelector, useStore } from "../../zust/store";
import GlobalSearchInput from "../../components/GlobalSearchInput";
const Movies = () => {
  const movieTitle = useStore((state) => state.movieTitle);
  const allMovies = useStore((state) => state.allMovies);
  const setMovieTitle = useStore(movieTitleSelector);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(e.target.value);
  };
  return (
    <>
      <GlobalSearchInput
        placeholder="Search for movies"
        onChange={handleChange}
        value={movieTitle}
      />
      <Box maxW={["100%", "1240px"]}>
        {movieTitle ? (
          <Heading mb={["34px"]} mt="34px" variant="h1">
            Found {allMovies.length}{" "}
            {allMovies.length > 1 ? "results" : "result"} for '{movieTitle}'
          </Heading>
        ) : (
          <Heading variant={"h1"} mb="38px" mt="34px">
            Movies
          </Heading>
        )}

        <GridContainer>
          {allMovies.map((el) => (
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
    </>
  );
};

export default Movies;
