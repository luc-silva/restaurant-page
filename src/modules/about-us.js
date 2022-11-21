function createMenu(){
    let page = document.createElement("section")
    page.id = "about-us"
    page.innerHTML =`                
    <div id="about-us-container">
        <div id="about-us-info">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt aperiam quam tempora, ex repellendus odit alias consequatur voluptates, assumenda illo? Voluptas quo minima unde earum pariatur fuga necessitatibus amet?</p>
        </div>

        <div id="about-us-location-list">
            <h3>You can find us at:</h3>
            <ul>
                <li>1232 Oysterdale Rd - Pennsylvania</li>
                <li>1641 N State St - Utah</li>
                <li>5100 Curry Hwy - Alaska</li>
                <li>800 Greenwood Ave - North Dakota</li>
            </ul>
        </div>
    </div>
    <div id="about-us-img"></div>`

    return page
}

function initializeAboutUs(){
    let body = document.querySelector("#content")
    body.textContent = ""

    body.appendChild(createMenu())
}

export default initializeAboutUs;