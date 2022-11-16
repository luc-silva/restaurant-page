function createMenuSection(title, optionArray){
    let container = document.createElement("div")
    container.classList.add("type-container")

    let sectionTitle = document.createElement("h3")
    sectionTitle.textContent = title

    container.appendChild(sectionTitle)

    let menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")

    let image = document.createElement("div")
    image.classList.add("food-type-illustration")
    
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
    menuContent.appendChild(image)

    container.appendChild(menuContent)
    return container
}

function createMenu(){
    let breakfastOption = [{foodName:"Burguer", price:20.40, description:"lorem"},
    {foodName:"Burguer", price:20.40, description:"lorem"}, 
    {foodName:"Burguer", price:20.40, description:"lorem"},
    {foodName:"Burguer", price:20.40, description:"lorem"}, 
    {foodName:"Burguer", price:20.40, description:"lorem"},]

    let page = document.createElement('section')
    page.id = "menu"

    let pageTitle = document.createElement("h2")
    pageTitle.textContent = "DISHES"



    page.appendChild(pageTitle)
    page.appendChild(createMenuSection("Breakfast" , breakfastOption))
    page.appendChild(createMenuSection("Lunch" , breakfastOption))
    page.appendChild(createMenuSection("Dinner" , breakfastOption))

    return page
}

function initializeMenu(){
    let body = document.querySelector("#content")
    body.textContent = ""

    body.appendChild(createMenu())
}

export default initializeMenu;