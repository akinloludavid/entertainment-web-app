import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

const useCustomMediaQuery = () => {
  const [isMobile, isPhone, isTablet, isMiniLaptop, isLargeScreen] =
    useMediaQuery([
      "(max-width: 480px)",
      "(max-width: 576px)",
      "(max-width: 768px)",
      "(max-width: 992px)",

      "(min-width: 1441px)",
    ]);
  return {
    isMobile,
    isPhone,
    isTablet,
    isMiniLaptop,
    isLargeScreen,
  };
};

export default useCustomMediaQuery;
