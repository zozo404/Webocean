module.exports = {
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik-doodle-shadow':['Rubik Doodle Shadow']
    },
    extend: {
      colors: {
        darkblue: "#000B76",
        bluefooter: "#000025"
      },
      blur: {
        1: "1px"
      }
    },
    screens: {
      iphoneSE: "375px",
      iphone12pro: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  content: [
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "static/**/*.html",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}"
  ]
}
