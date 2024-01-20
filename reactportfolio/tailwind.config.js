/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    '!text-center', '!text-left', '!text-right', '!text-justify',
    'max-w-[10%]', 'max-w-[20%]', 'max-w-[30%]', 'max-w-[40%]', 'max-w-[50%]', 'max-w-[60%]', 'max-w-[70%]', 'max-w-[80%]', 'max-w-[90%]', 'max-w-[100%]',
    'max-w-[100px]', 'max-w-[200px]', 'max-w-[300px]', 'max-w-[400px]', 'max-w-[500px]', 'max-w-[600px]', 'max-w-[700px]', 'max-w-[800px]', 'max-w-[900px]', 'max-w-[1000px]',
    'sm:max-w-full',
    'w-[100vw]',
    'self-start', 'self-center', 'self-end',
    {
      pattern: /grid-cols-(1|2|3|4|5|6)/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /(!)?font-(normal|medium|semibold|bold|extrabold)/,
    },
    {
      pattern: /(!)?text-(dark|light|primary|indigo|white)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#daa520",
        indigo: "#4B0082",
        while: "#ffffff",
      },
    },
    screens: {
      "3xl": { max: "1919px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    backgroundImage: {
      circular: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffffff 5px,#ffffff 100px)",
      circularLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffffff 5px,#ffffff 80px)",
      circularMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffffff 5px,#ffffff 60px)",
      circularSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#ffffff 5px,#ffffff 40px)",
    }
  },

  plugins: [],
}