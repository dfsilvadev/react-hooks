export default {
  grid: {
    container: "75rem"
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family:
      "Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.75rem" // 28px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.5rem", // 24px
    medium: "2rem", // 32px
    large: "2.5rem" // 40px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    dark: "#070B11",
    white: "#FFF",
    light: "#e5f1ff",
    grayDark: "#BBC9DA",
    blue: "#051933",
    red: "#F16165",
    text: "#093366"
  }
} as const;
