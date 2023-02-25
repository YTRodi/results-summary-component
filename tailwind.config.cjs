const palette = {
  violetLigher: "#c7c0ff", // Your result
  violetLight: "#6743ff", // gradient end
  violetPrimary: "#312cea", // gradient start
  violetDark: "#4c23ca", // circle

  grayLight: "#b9b4bb", // / 100
  grayPrimary: "#303b59", // Summary, 80, 92, 61, 72, Continue

  redLight: "#fff6f5",
  redPrimary: "#F55",

  yellowLight: "#fffbf2",
  yellowPrimary: "#FFB21E",

  aquaLight: "#f2fbfa",
  aquaPrimary: "#00BB8F",

  blueLight: "#f3f3fd",
  bluePrimary: "#1125D6",

  white: "#ffffff", // main background
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...palette,
      // Tokens
      resultBackground: palette.violetPrimary,
      resultTitle: palette.violetLigher,
      resultSubtitle: palette.white,
      resultBody: palette.violetLigher,
      resultScoreBackground: palette.violetDark,
      resultScoreTotal: palette.white,
      resultScoreOf: palette.violetLigher,

      summaryBackground: palette.white,
      summaryTitle: palette.grayPrimary,
      summaryScoreTotal: palette.grayPrimary,
      summaryScoreOf: palette.grayLight,
      summaryReactionText: palette.redPrimary,
      summaryReactionBackground: palette.redLight,
      summaryMemoryText: palette.yellowPrimary,
      summaryMemoryBackground: palette.yellowLight,
      summaryVerbalText: palette.aquaPrimary,
      summaryVerbalBackground: palette.aquaLight,
      summaryVisualText: palette.bluePrimary,
      summaryVisualBackground: palette.blueLight,
      summaryButtonBackground: palette.grayPrimary,
      summaryButtonText: palette.white,
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
        },
        "slide-in-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s",
        "slide-in-bottom": "slide-in-bottom 0.8s",
      },
    },
  },
  plugins: [],
};
