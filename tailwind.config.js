/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gbltsorange: "#FF681E",
        gbltsblue: "#001856",
        gbltsgrey: "#F7F7F8",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
