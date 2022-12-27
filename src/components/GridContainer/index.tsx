import { BoxProps, Grid } from "@chakra-ui/react";
import { GridProps } from "@chakra-ui/styled-system";
import React from "react";

interface IGridContainer extends BoxProps {
  children: React.ReactNode;
}
const GridContainer = ({ children, ...rest }: IGridContainer) => {
  return (
    <Grid
      templateColumns={[
        "repeat(2,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(4,1fr)",
      ]}
      sx={{
        "@media (max-width:360px)": {
          gridTemplateColumns: "repeat(1,1fr)",
          rowGap: "32px",
        },
      }}
      rowGap={["16px", "16px", "24px", "32px"]}
      columnGap={["15px", "29px", "29px", "40px"]}
      w="100%"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
