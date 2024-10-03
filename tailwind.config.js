/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#0f172a',
  			accent: {
  				DEFAULT: '#0099FF',
  				hover: '#009BE1'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  		}
  	},
  	fontFamily: {
  		primary: 'var(--font-jetbrainsMono)'
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
