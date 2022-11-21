import initializeHomepage from './modules/home.js'
import initializeMenu from './modules/menu.js'
import initializeAboutUs from './modules/about-us.js'
import initializeDelivery from './modules/delivery.js'

let header = (function(){
    let homeBtn = document.querySelector("#home-btn")
    homeBtn.addEventListener("click", initializeHomepage)

    let menuBtn = document.querySelector("#menu-btn")
    menuBtn.addEventListener("click", initializeMenu)

    let aboutBtn = document.querySelector("#about-btn")
    aboutBtn.addEventListener("click", initializeAboutUs)

    let deliveryBtn = document.querySelector("#delivery-btn")
    deliveryBtn.addEventListener("click", initializeDelivery)


})()

initializeHomepage()