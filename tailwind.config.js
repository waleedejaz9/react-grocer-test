/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    // "./src/components/*.{ts,tsx}",
    // "./src/auth/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    // "./pages/**/*.{html,tsx}",
    "./src/**/**/*.{ts,tsx}",
    // "./components/**/*.{html,tsx}",
  ],
  theme: {
    fontFamily: {

      Poppins: ["Poppins"],
      Inter: ["Inter"]

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        paragraph: "#808080",
        price: "#434141",
        buttonColor: "#E74C1B"
      },
      background: () => ({
        background: "#F0F4FC"
      }),
      fontSize: {
        45: "38px",
        small: "10px",
      },
      border: {
        1: "1px",
      },
      width: {
        80: "80%",
      },
      height: {
        '670px': '670px',
        '400px': '540px'
      },
      padding: {},
      zIndex: {},
      borderWidth: {},
      borderRadius: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
