/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      margin: {
        'top-adjusted': '16rem',
      },
    },

    colors: {
      'space1-1': '#000000',
      'space1-2': '#7c0a02',
      'space1-3': '#371f76',
      'space1-4': '#ffffff',
      'space1-5': '#ebecf0',
      'space1-6': '#ffc0cb',
      'space1-7': '#4b0082',
     

    },

    extend: {
      backgroundImage: {
        'space1one': "url('/images/space1one.jpg')",
        'space1two': "url('/images/space1two.jpg')",
        'space1three': "url('/images/space1three.jpg')",
        'space1four': "url('/images/space1four.jpg')",
        'space1five': "url('/images/space1five.jpg')",
        'space1six': "url('/images/space1six.jpg')",
        'space1seven': "url('/images/space1seven.jpg')",
        'space1eight': "url('/images/space1eight.jpg')",
        'space1nine': "url('/images/space1nine.jpg')",
        'space1thirten': "url('/images/space1thirten.png')",
        },
  },
  plugins: [],
  },
}
