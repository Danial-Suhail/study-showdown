import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";
const flattenColorPalette = require("tailwindcss/src/util/flattenColorPalette");
const toColorValue = require("tailwindcss/src/util/toColorValue");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jersey: ['"Jersey 10"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "gradient-xy": "gradient-xy 8s ease-in-out infinite",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
    plugins: [
      plugin(function ({ matchUtilities, e, config, theme }: PluginAPI) {
        const textBorderSize = `--tw${config("prefix")}-text-border-size`;

        matchUtilities(
          {
            "text-border": (value) => ({
              "text-shadow": `0 0 var(${textBorderSize},1px) ${toColorValue(
                value
              )}`,
            }),
          },
          {
            values: (({ DEFAULT: _, ...colors }) => colors)(
              flattenColorPalette(theme("borderColor"))
            ),
            type: "color",
          }
        );

        matchUtilities(
          {
            "text-border-size": (value) => ({
              [textBorderSize]: value,
            }),
          },
          { values: theme("borderWidth") }
        );
      }),
    ],
  },
} satisfies Config;
