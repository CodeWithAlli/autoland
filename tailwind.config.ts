import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        autoland: {
          dark: "#0B132B", // El azul oscuro del sidebar
          gold: "#D97706", // El naranja/dorado de los botones
          lightGold: "#FEF3C7", // Fondo de alertas doradas
          grayBg: "#F3F4F6", // El fondo gris claro de la app
        }
      },
    },
  },
  plugins: [],
};
export default config;