export const HeadingStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#ffffff",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      fontSize: "32px",
      fontWeight: "300",
      lineHeight: "40px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "300",
      lineHeight: "30px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "30px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "23px",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
