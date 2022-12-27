import create from "zustand";
import db from "../data.json";
import { getUpdatedBookMarkedMovies } from "../utils/helpers";
interface IState {
  recommendedMovies: any[];
  allSeries: any[];
  bookMarkedMovies: any[];
  bookMarkedSeries: any[];
  allMovies: any[];
  movieTitle: string;
  seriesTitle: string;
  bookMarkTitle: string;
  setMovieTitle: (e: string) => void;
  setSeriesTitle: (e: string) => void;
  setBookMarkTitle: (e: string) => void;
  addToBookMark: (e: any) => void;
}
const recommendedMovies = db.filter((el) => !el.isTrending);
const series = db.filter((el) => el.category === "TV Series");
const movies = db.filter((el) => el.category === "Movie");
const bookMarkedMovies = db.filter(
  (el) => el.isBookmarked && el.category === "Movie"
);
const bookMarkedSeries = db.filter(
  (el) => el.isBookmarked && el.category === "TV Series"
);
export const useStore = create<IState>((set: Function, get: Function) => ({
  recommendedMovies,
  allSeries: series,
  allMovies: movies,
  bookMarkedMovies,
  bookMarkedSeries,
  movieTitle: "",
  seriesTitle: "",
  bookMarkTitle: "",
  setMovieTitle: (query: string) =>
    set((state: IState) => ({
      ...state,
      movieTitle: query,
      recommendedMovies: recommendedMovies.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      ),
      allMovies: movies.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      ),
    })),
  setSeriesTitle: (query: string) =>
    set((state: IState) => ({
      ...state,
      seriesTitle: query,
      allSeries: series.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      ),
    })),
  setBookMarkTitle: (query: string) =>
    set((state: IState) => ({
      ...state,
      bookMarkTitle: query,
      bookMarkedMovies: bookMarkedMovies.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      ),
      bookMarkedSeries: bookMarkedSeries.filter((el) =>
        el.title.toLowerCase().includes(query.toLowerCase())
      ),
    })),
  addToBookMark: (movie: any) => {
    if (movie.category === "Movie") {
      const idx = get().bookMarkedMovies.findIndex(
        (el: any) => el.title.toLowerCase() === movie.title.toLowerCase()
      );

      if (idx === -1) {
        const updatedMovies = getUpdatedBookMarkedMovies(
          get().recommendedMovies,
          movie.title,
          true
        );
        const updatedAllMovies = getUpdatedBookMarkedMovies(
          get().allMovies,
          movie.title,
          true
        );
        set((state: IState) => ({
          ...state,
          bookMarkedMovies: [
            ...state.bookMarkedMovies,
            { ...movie, isBookmarked: true },
          ],
          recommendedMovies: updatedMovies,
          allMovies: updatedAllMovies,
        }));
      } else {
        const updatedMovies = getUpdatedBookMarkedMovies(
          get().recommendedMovies,
          movie.title,
          false
        );
        const updatedAllMovies = getUpdatedBookMarkedMovies(
          get().allMovies,
          movie.title,
          false
        );
        const updatedBookMarkMovies = get().bookMarkedMovies.filter(
          (el: any) => el.title.toLowerCase() !== movie.title.toLowerCase()
        );
        set((state: IState) => ({
          ...state,
          bookMarkedMovies: updatedBookMarkMovies,
          recommendedMovies: updatedMovies,
          allMovies: updatedAllMovies,
        }));
      }
    } else if (movie.category === "TV Series") {
      const idx = get().bookMarkedSeries.findIndex(
        (el: any) => el.title.toLowerCase() === movie.title.toLowerCase()
      );
      if (idx === -1) {
        const updatedSeries = getUpdatedBookMarkedMovies(
          get().recommendedMovies,
          movie.title,
          true
        );
        const updatedAllSeries = getUpdatedBookMarkedMovies(
          get().allSeries,
          movie.title,
          true
        );
        set((state: IState) => ({
          ...state,
          bookMarkedSeries: [
            ...state.bookMarkedSeries,
            { ...movie, isBookmarked: true },
          ],
          recommendedMovies: updatedSeries,
          allSeries: updatedAllSeries,
        }));
      } else {
        const updatedSeries = getUpdatedBookMarkedMovies(
          get().recommendedMovies,
          movie.title,
          false
        );
        const updatedAllSeries = getUpdatedBookMarkedMovies(
          get().allSeries,
          movie.title,
          false
        );
        const updatedBookMarkSeries = get().bookMarkedSeries.filter(
          (el: any) => el.title.toLowerCase() !== movie.title.toLowerCase()
        );
        set((state: IState) => ({
          ...state,
          bookMarkedSeries: updatedBookMarkSeries,
          recommendedMovies: updatedSeries,
          allSeries: updatedAllSeries,
        }));
      }
    }
  },
}));

export const movieTitleSelector = (state: IState) => state.setMovieTitle;
export const seriesTitleSelector = (state: IState) => state.setSeriesTitle;
export const bookMarkTitleSelector = (state: IState) => state.setBookMarkTitle;
export const addToBookMarkSelector = (state: IState) => state.addToBookMark;
