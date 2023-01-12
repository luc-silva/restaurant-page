import { MealSection } from "./MealSection";

export const Dishes = () => {
    let availableDishes = [
        { foodName: "Lorem ipsum", price: 20.4, description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt" },
        { foodName: "Burguer", price: 20.4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
        { foodName: "Burguer", price: 20.4, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { foodName: "Burguer", price: 20.4, description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { foodName: "Burguer", price: 20.4, description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" },
    ];

    let menuSections = [
        { title: "Breakfast", dishes: availableDishes, imgSrc: "breakfast.jpg" },
        { title: "Lunch", dishes: availableDishes, imgSrc: "lunch.jpg" },
        { title: "Dinner", dishes: availableDishes, imgSrc: "dinner.jpg" },
    ];

    return (
        <section id="menu">
            <h2>DISHES</h2>
            {menuSections.map(({title, dishes, imgSrc}, key) => (
                <MealSection key={key} title={title} dishes={dishes} imgSrc={imgSrc}/>
            ))}
        </section>
    );
};
