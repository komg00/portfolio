import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('../public/images/background.jpg')",
      },
      colors: {
        "bg-main": "#55B2D4",
        "bg-gray": "#F0F0F0",
        "border-main": "#5B5B5B",
        "font-blue": "#1A7494",
        "font-main": "#208DB3",
        "border-content": "#B6B6B6",
        blue: "#0000FF",
      },
    },
    fontFamily: {
      DungGeunMo: ["DungGeunMo"],
      NeoDunggeunmoPro: ["NeoDunggeunmoPro-Regular"],
      NotoSans: ["Noto-Sans"],
    },
  },
  plugins: [],
};
export default config;
