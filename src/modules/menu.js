function createMenuSection(title, optionArray, image){
    let container = document.createElement("div")
    container.classList.add("type-container")

    let sectionTitle = document.createElement("h3")
    sectionTitle.textContent = title

    container.appendChild(sectionTitle)

    let menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")

    let imageElement = document.createElement("img")
    imageElement.src = image
    imageElement.classList.add("food-type-illustration")
    
    let ul = document.createElement("ul")

    optionArray.forEach(option => {
        ul.innerHTML += `
        <li>
            <span class="menu-item">
            <div class="menu-item-info"><strong>${option.foodName}</strong><span class="price">${option.price}$</span></div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quae ab ullam molestiae, culpa provident harum odio? Autem, corporis aperiam cumque corrupti provident, eligendi repellat numquam.</p>
            </span>
        </li>`
    });
    menuContent.appendChild(ul)
    menuContent.appendChild(imageElement)

    container.appendChild(menuContent)
    return container
}

function createMenu(){
    let menuSection = document.createElement('section')
    menuSection.id = "menu"

    let breakfastOption = [{foodName:"Lorem ipsum", price:20.40, description:"lorem"},
    {foodName:"Burguer", price:20.40, description:"lorem"}, 
    {foodName:"Burguer", price:20.40, description:"lorem"},
    {foodName:"Burguer", price:20.40, description:"lorem"}, 
    {foodName:"Burguer", price:20.40, description:"lorem"},]


    let pageTitle = document.createElement("h2")
    pageTitle.textContent = "DISHES"



    menuSection.appendChild(pageTitle)
    menuSection.appendChild(createMenuSection("Breakfast" , breakfastOption, "../src/img/breakfast.jpg"))
    menuSection.appendChild(createMenuSection("Lunch" , breakfastOption, "../src/img/lunch.jpg"))
    menuSection.appendChild(createMenuSection("Dinner" , breakfastOption, "../src/img/dinner.jpg"))

    return menuSection
}

function initializeMenu(){
    let body = document.querySelector("#content")
    body.textContent = ""

    body.appendChild(createMenu())
}

export default initializeMenu;