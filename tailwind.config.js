/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F1A",
        panel: "#131A2A",
        panel2: "#1A2236",
        line: "#26304A",
        fog: "#8B96AD",
        paper: "#EDEFF5",
        signal: "#4FD6C0",
        signal2: "#3BB6A6",
        ember: "#F2A65A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(79,214,192,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,214,192,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
