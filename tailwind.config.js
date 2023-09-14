const plugin = require('tailwindcss/plugin');

module.exports = {
    daisyui: {
          themes: ["lemonade"
          ],
    },
    plugins: [require("daisyui")],
    content: [
    './app/views/**/*.html.slim',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
