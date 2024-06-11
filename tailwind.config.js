/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('Assets/Images/waves.png')",
        'heroku': "url('Assets/Images/wave.png')",
        'line': "url('Assets/Images/shiny.svg')",
        'simple': "url('Assets/Images/simple.svg')",
        'rect': "url('Assets/Images/rect.svg')",
        'ani': "url('Assets/Images/ani.svg')",
        'anitwo': "url('Assets/Images/anitwo.svg')",
      },
        backgroundColor:{
       
          blue:{
            50:  '#E2E2F3',
            100: '#D4D4ED',
            150: '#C6C5E7',
            200: '#B7B7E1',
            250: '#A9A8DC',
            300: '#D4D4ED',
            350: '#8C8BD0',
            400: '#7E7DCA',
            450: '#706EC4',
            500: '#AEC5EB',
            550: '#5351B8',
            600: '#4947AE',
            700: '#403F9A',
            750: '#373582',
            800: '#302F74',
            850: '#2A2965',
            900: '#404198'
          }
        },
        colors:{
        
          blue:{
            50:  '#E2E2F3',
            100: '#D4D4ED',
            150: '#C6C5E7',
            200: '#B7B7E1',
            250: '#A9A8DC',
            300: '#D4D4ED',
            350: '#8C8BD0',
            400: '#7E7DCA',
            450: '#706EC4',
            500: '#AEC5EB',
            550: '#5351B8',
            600: '#4947AE',
            700: '#403F9A',
            750: '#373582',
            800: '#302F74',
            850: '#2A2965',
            900: '#404198'
          }
        },
      },
    },
  plugins: [require('flowbite/plugin')({
    charts: true,
}),],
darkMode:'class'
}

