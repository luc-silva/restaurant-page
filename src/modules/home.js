function createHomepage(){
    let page = document.createElement("section")
    page.id = "home"

    let div = document.createElement("div")
    div.innerHTML = `
    <div id="home-welcome">
        <h2>Welcome to the Low Carbs Clinic!</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum fuga quia cum quaerat, exercitationem, unde tempore doloribus nemo provident quibusdam pariatur velit perspiciatis assumenda eum, iusto ut quae totam!
    </div>`
    
    div.id = "home-background"

    page.appendChild(div)
    return page

}

function initializeHomepage(){
    let body = document.querySelector("#content")
    body.textContent = ""
    
    let homepage = createHomepage()

    body.appendChild(homepage)

}

export default initializeHomepage;