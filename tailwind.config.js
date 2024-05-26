/** @type {import('tailwindcss').Config} */
export default {
  theme: {
     extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Times New Roman', 'serif'],
        'mono': ['Menlo', 'Courier New', 'monospace'],
        'display': ['Oswald', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
}

