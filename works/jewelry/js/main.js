$(function() {
  const nav = $(".nav")
  const button = $(".button")
  const buttonLineTop = $(".button-line__top")
  const buttonLineMedium = $(".button-line__medium")
  const buttonLineBottom = $(".button-line__bottom")

  const toggleNav = () => {
    nav.toggleClass("nav-isOpen")
    buttonLineTop.toggleClass("button-line__top_isOpen")
    buttonLineMedium.toggleClass("button-line__medium_isOpen")
    buttonLineBottom.toggleClass("button-line__bottom_isOpen")
  }

  button.on("click", () => {
    toggleNav()
  });
})