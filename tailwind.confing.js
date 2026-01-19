export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "600px" }, // You can name this 'xs', 'tablet', or 'sm-mid'
      },
    },
  },
  plugins: [],
};
