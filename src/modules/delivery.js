function createDeliveryPage(){
    let deliverySection = document.createElement("section")
    deliverySection.id = "delivery-section"

    let sectionImage = document.createElement("div")
    sectionImage.id = "section-picture"

    let deliveryContainer = document.createElement("div")
    deliveryContainer.id = "delivery-container"
    deliveryContainer.innerHTML = `
    <div id="delivery-input">
        <input type="text" placeholder="Your name">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Address">
        <button>Request free low carb suply!</button>
    </div>
    <div id="delivery-text">
        <h2>Request free stuff right now!</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla aspernatur, quasi, temporibus assumenda accusamus magnam placeat pariatur, nihil eius veritatis adipisci. Sit sint est inventore culpa nostrum quidem sapiente!</p>
    </div> `


    deliverySection.appendChild(sectionImage)
    deliverySection.appendChild(deliveryContainer)
    return deliverySection
}

function initializeDelivery(){
    let body = document.querySelector("#content")
    body.textContent = ""

    body.appendChild(createDeliveryPage())
}


export default initializeDelivery