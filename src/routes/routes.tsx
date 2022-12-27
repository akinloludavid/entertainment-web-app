import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import { IAppRoute } from "../types";
import {
  BOOKMARKED,
  HOME,
  LOGIN_PAGE,
  MOVIES,
  SERIES,
  SIGNUP_PAGE,
} from "./constants";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));
const MoviesPage = WithSuspense(lazy(() => import("../pages/Movies")));
const BookMarkPage = WithSuspense(lazy(() => import("../pages/Bookmarked")));
const TvSeriesPage = WithSuspense(lazy(() => import("../pages/TvSeries")));

const LoginPage = WithSuspense(lazy(() => import("../pages/Login")));
const SignupPage = WithSuspense(lazy(() => import("../pages/Signup")));

export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: MOVIES, element: <MoviesPage /> },
  { path: BOOKMARKED, element: <BookMarkPage /> },
  { path: SERIES, element: <TvSeriesPage /> },
  { path: LOGIN_PAGE, element: <LoginPage /> },
  { path: SIGNUP_PAGE, element: <SignupPage /> },
];
