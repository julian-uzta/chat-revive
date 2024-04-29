import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      height: {
        128: "32rem",
        160: "40rem"
      },
      backgroundColor: {
        "base-default": "#E5E9F0"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["nord"]
  }
} satisfies Config;
