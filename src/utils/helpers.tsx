import { useLocation } from "react-router-dom";

export const isNavActive = (str: string): boolean => {
  const location = useLocation();
  return location.pathname === str;
};

export const getUpdatedBookMarkedMovies = (
  arr: any[],
  key: string,
  isBookmarked: boolean
) => {
  return arr.map((el) => (el.title === key ? { ...el, isBookmarked } : el));
};
