/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // You might not have a 'pages' directory in an app router setup
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // To be safe, include the src directory as well
  ],
  theme: {
    extend: {
      colors: {
        "dashboard-dark-blue": "#YOUR_DARK_BLUE_COLOR",
        "dashboard-blue": "#YOUR_ACCENT_BLUE_COLOR",
        "dashboard-light-blue": "#YOUR_LIGHT_BLUE_COLOR",
      },
    },
  },
  plugins: [],
};
