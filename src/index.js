import './style.css'
import initializeHomepage from './modules/home.js'

let header = (function(){
    let homeBtn = document.querySelector("#home-btn")
    homeBtn.addEventListener("click", initializeHomepage)

    let menuBtn = document.querySelector("#menu-btn", () => {
        alert(12)
    })

    let aboutBtn = document.querySelector("#about-btn")

    let deliveryBtn = document.querySelector("#delivery-btn")


})()

initializeHomepage()