import { SectionItem } from "./SectionItem";

export const MealSection = ({ title, dishes, imgSrc }) => {
    let image = require("../../img/" + `${imgSrc}`)
    return (
        <div className="type-container">
            <h3>{title}</h3>
            <div className="menu-content">
                <ul >
                    {dishes.map(({ foodName, price, description }, key) => (
                        <SectionItem
                            foodName={foodName}
                            price={price}
                            description={description}
                            key={key}
                        />
                    ))}
                </ul>
                <img src={image} className="food-type-illustration"></img>
            </div>
        </div>
    );
};
