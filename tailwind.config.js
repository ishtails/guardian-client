/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    "fontFamily": {
      "lexend": "Lexend",
      sans: ["Inter", 'sans-serif']
     },

    extend: {
      "colors": {
        "primary": "#0ea5e9",
        "placeholder": "#667085",
        "amber-light": "#fffbeb",
        "amber-dark": "#78350f",
        "yellow": "#ffbd00",
        "brown": "#241b00"
       },

       "fontSize": {
        "p14": "0.875rem",
        "p16": "1rem",
        "p18": "1.125rem",
        "p20": "1.25rem",
        "h24": "1.5rem",
        "h28": "1.75rem",
        "h32": "2rem",
        "h36": "2.25rem"
       },

       "boxShadow": {
        "card-shadow": "0px 0px 0px 0px rgba(38,50,56,0.1), -1px 1px 3px 0px rgba(38,50,56,0.1), -2px 4px 5px 0px rgba(38,50,56,0.09), -5px 9px 6px 0px rgba(38,50,56,0.05), -9px 17px 8px 0px rgba(38,50,56,0.01), -15px 26px 8px 0px rgba(38,50,56,0)"
       },
    },
  },
}