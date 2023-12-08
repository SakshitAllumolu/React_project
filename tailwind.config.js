/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blue: "#4200ff",
        "text-color": "#1a1a1a",
        steelblue: "#3178a0",
        black: "#000",
        gray: {
          "100": "#111",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        gainsboro: "#dfdfdf",
        "grey-aaa": "#595959",
        "grey-aa-large": "#949494",
        "light-grey": "#cacaca",
        limegreen: "#1dce00",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        inter: "Inter",
        "primary-caption-13": "Gilroy",
      },
      borderRadius: {
        "81xl": "100px",
        "30xl": "49px",
      },
    },
    fontSize: {
      base: "16px",
      "29xl": "48px",
      "5xl": "24px",
      "2xs": "11px",
      sm: "14px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
