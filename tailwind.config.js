// tailwind.config.js
module.exports = {
  future: {},
  purge: false,
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": ["1.625rem", "1.5em"],
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": ["4.375rem", "1.1em"],
      "7xl": "5rem",
    },
    backgroundColor: {
      primary: "#202529",
      secondary: "#EAEAEA",
      tertiary: "#074BE2",
      white: "#FFFFFF",
    },
    textColor: {
      primary: "#212529",
      secondary: "#6C757D",
      tertiary: "#094BE2",
      white: "#FFFFFF",
    },
    boxShadow: {
      cta: "0px 10px 10px -4px rgb(7 75 226 / 40%)",
    },
    borderColor: {
      tertiary: "094BE2",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
