import "../styles/index.scss"
import "./Form"
import Bulmatown from "bulmatown"

import Swup from "swup"
import SwupBodyClassPlugin from "@swup/body-class-plugin"
import SwupScrollPlugin from "@swup/scroll-plugin"
import SwupFadeTheme from "@swup/fade-theme"
const swup = new Swup({
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupScrollPlugin(),
    new SwupFadeTheme(),
  ]
})

swup.on("transitionStart", () => {
  if (document.querySelector('#top-navbar').classList.contains('is-active')) {
    document.querySelector('body > nav .navbar-burger').classList.toggle('is-active')
    document.querySelector('#top-navbar').classList.toggle('is-active')
  }
})

console.info("Bridgetown is loaded!")

