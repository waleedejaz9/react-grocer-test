/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix: "tw-",
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
      Rubik: ["Rubik", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Smooch: ["Smooch Sans"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        paragraph: "#808080",
      },
      background: () => ({
        buttonRed: "#EA5323",
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
      height: {},
      padding: {},
      zIndex: {},
      borderWidth: {},
      borderRadius: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
