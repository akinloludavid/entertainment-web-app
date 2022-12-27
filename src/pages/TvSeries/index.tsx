import React, { ChangeEvent } from "react";
import { Box, GridItem, Heading } from "@chakra-ui/react";
import MovieCard from "../../components/MovieCard";
import GridContainer from "../../components/GridContainer";
import GlobalSearchInput from "../../components/GlobalSearchInput";
import { seriesTitleSelector, useStore } from "../../zust/store";
const TvSeries = () => {
  const seriesTitle = useStore((state) => state.seriesTitle);
  const tvSeries = useStore((state) => state.allSeries);
  const setSeriesTitle = useStore(seriesTitleSelector);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeriesTitle(e.target.value);
  };
  return (
    <>
      <GlobalSearchInput
        placeholder="Search for TV Series"
        value={seriesTitle}
        onChange={handleChange}
      />
      <Box maxW={"1240px"}>
        {seriesTitle ? (
          <Heading mb={["34px"]} mt="34px" variant="h1">
            Found {tvSeries.length} {tvSeries.length > 1 ? "results" : "result"}{" "}
            for '{seriesTitle}'
          </Heading>
        ) : (
          <Heading variant={"h1"} mb="38px" mt="34px">
            TV Series
          </Heading>
        )}

        <GridContainer>
          {tvSeries.map((el) => (
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

export default TvSeries;
