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
      Inter: ["Inter"],
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
        buttonColor: "#E74C1B",
        buttonColor2: "#E74C0B",
        brownLight: "#A1A1A1",
      },
      background: () => ({
        background: "#F0F4FC",
        blackLight: "rgba(0,0,0,0.10)",
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
        "tw": "100rem",
        "ll": "75rem",
        "dd": "45rem"
      },
      height: {
        "670px": "670px",
        "400px": "540px",
        "27rem": "27.9rem"
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
