/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#979797",
        gray: {
          "100": "#fafafa",
          "200": "#8d8b8b",
          "300": "rgba(0, 0, 0, 0.71)",
        },
        white: "#fff",
        dimgray: "#545454",
        whitesmoke: {
          "100": "#faf8f8",
          "200": "#eee",
          "300": "#ecebeb",
        },
        darkslateblue: "rgba(105, 107, 177, 0.68)",
        steelblue: "rgba(76, 160, 196, 0.4)",
      },
      spacing: {},
      fontFamily: {
        sen: "Sen",
        sora: "Sora",
        "dm-serif-display": "'DM Serif Display'",
        "droid-sans": "'Droid Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "13xl": "32px",
        "16xl": "35px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "26xl": "45px",
      "51xl": "70px",
      sm: "14px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
