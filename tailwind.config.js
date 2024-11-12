/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxsmall: "200px",
      xsmall: "400px",
      small: "500px",
      medium: "640px",
      large: "1024px",
      xlarge: "1280px",
    },
  },
  plugins: [],
};

