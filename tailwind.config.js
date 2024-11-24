module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        main: '#0080FF',         // Main color
        primaryText: '#26334D',  // Primary text color
        transparentCard: "#B4CCFC4D", // New transparent card color
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // Default font
    },
  },
  plugins: [],
};

