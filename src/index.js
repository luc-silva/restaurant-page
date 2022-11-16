import initializeHomepage from './modules/home.js'
import initializeMenu from './modules/menu.js'

let header = (function(){
    let homeBtn = document.querySelector("#home-btn")
    homeBtn.addEventListener("click", initializeHomepage)

    let menuBtn = document.querySelector("#menu-btn")
    menuBtn.addEventListener("click", initializeMenu)

    let aboutBtn = document.querySelector("#about-btn")

    let deliveryBtn = document.querySelector("#delivery-btn")


})()

initializeHomepage()