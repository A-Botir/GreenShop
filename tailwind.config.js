/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "6rem",
        },
        center: true,
      },
      transitionTimingFunction: {
        easy: "ease", 
      },
    },
    colors: {
      oridinary: "#727272",
      navlist: "#3D3D3D",
      check: "#46A358",
      grey: "#FBFBFB",
    },
    screens: {
      sm: { min: "398px", max: "767px" },

      md: { min: "768px", max: "1024px" },

      lg: { min: "1280px", max: "1535px" },

      xl: { min: "1912px" },
    },
    fontFamily: {
      cerapro: "Cera Pro",
    },
    boxShadow: {
      footerform: "0px 0px 20px 0px #0000000F",
      head: "0px -10px 30px 0px #B8B8B833",
      headbtn: "0px 10px 20px 0px #D3D3D3",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      half: "50%",
    },
  },
  plugins: [],
  // darkMode: 'class',
};
