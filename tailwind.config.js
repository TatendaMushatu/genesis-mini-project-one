/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#052c54',
      'red': "#da1f25",
      'orange': "#ff5a5f",
      'sky': "#f8fafc",
      "default": "#e5e7eb",
      "gray-light": "#b8bdc5",
      'white': "#ffffff",
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#181819',
      'gray': '#8492a6',
      "fbBlue": "#3b5998",
      "waGreen": "#25d366",
      "inBlue": "#007fb1",
      "black": "#000000",
      "mailGray": "#7f7f7f"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
