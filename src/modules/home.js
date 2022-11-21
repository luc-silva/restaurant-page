function createHomepageSection(tableArray){
    let homepageSection = document.createElement("section")
    homepageSection.id = "home"

    let welcomeContainer = document.createElement("div")
    welcomeContainer.id = "home-background"
    welcomeContainer.innerHTML = `
    <div id="home-welcome">
        <h2>Welcome to the Low Carbs Clinic!</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum fuga quia cum quaerat, exercitationem, unde tempore doloribus nemo provident quibusdam pariatur velit perspiciatis assumenda eum, iusto ut quae totam!
    </div>`
    
    let reservationContainer = document.createElement("div")
    reservationContainer.id = "reservation"

    let title = document.createElement("h2")
    title.textContent = "Choose a seat and make your reservation: "
    reservationContainer.appendChild(title)

    

    let cardContainer = document.createElement("div")
    cardContainer.id = "reservation-card-container"
    reservationContainer.appendChild(cardContainer)


    tableArray.forEach(table => {
        let card = document.createElement("div")
        card.classList.add("reservation-card")
        card.innerHTML = `
        <img src="${table.image}"class="card-image">
        <div class="card-description">
            <h3>${table.item}</h3>
            <p>${table.description}</p>
        </div>
        `
        cardContainer.append(card)
    });

    let contactField = document.createElement("div")
    contactField.id = "contact-reservation"
    contactField.innerHTML = `<input type=" email" placeholder="Email">
    <em> We'll contact you when your reservation is prepared!</em>`

    homepageSection.appendChild(welcomeContainer)
    homepageSection.appendChild(reservationContainer)
    homepageSection.appendChild(contactField)
    return homepageSection
}

function initializeHomepage(){
    let body = document.querySelector("#content")
    body.textContent = ""

    let tableOptions = [{item: "Alone", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas, repellendus, dolorum iste aliquam reiciendis dolore amet cupiditate magnam inventore accusantium saepe animi exercitationem? Molestiae excepturi deleniti natus quasi nulla?", image: "../src/img/oneseattable.jpg"},
    {item: "2 seats", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas, repellendus, dolorum iste aliquam reiciendis dolore amet cupiditate magnam inventore accusantium saepe animi exercitationem? Molestiae excepturi deleniti natus quasi nulla?", image: "../src/img/twoseattable.jpg"},
    {item: "4 seats", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas, repellendus, dolorum iste aliquam reiciendis dolore amet cupiditate magnam inventore accusantium saepe animi exercitationem? Molestiae excepturi deleniti natus quasi nulla?", image: "../src/img/fourseattable.jpg"},
    {item: "Multiple seats", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas, repellendus, dolorum iste aliquam reiciendis dolore amet cupiditate magnam inventore accusantium saepe animi exercitationem? Molestiae excepturi deleniti natus quasi nulla?", image: "../src/img/specialtable.jpg"},]

    let homepage = createHomepageSection(tableOptions)

    body.appendChild(homepage)

}

export default initializeHomepage;