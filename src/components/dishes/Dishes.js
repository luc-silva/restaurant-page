import { MealSection } from "./MealSection";

export const Dishes = () => {
    let availableDishes = [
        { foodName: "Lorem ipsum", price: 20.4, description: "lorem" },
        { foodName: "Burguer", price: 20.4, description: "lorem" },
        { foodName: "Burguer", price: 20.4, description: "lorem" },
        { foodName: "Burguer", price: 20.4, description: "lorem" },
        { foodName: "Burguer", price: 20.4, description: "lorem" },
    ];

    let menuSections = [
        { title: "Breakfast", dishes: availableDishes, image: "" },
        { title: "Lunch", dishes: availableDishes, image: "" },
        { title: "Dinner", dishes: availableDishes, image: "" },
    ];

    return (
        <section id="menu">
            <h2>DISHES</h2>
            {menuSections.map(({title, dishes, image}, key) => (
                <MealSection key={key} title={title} dishes={dishes} image={image}/>
            ))}
        </section>
    );
};
