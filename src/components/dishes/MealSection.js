import { SectionItem } from "./SectionItem";

import styles from "./MealSection.module.css"

export const MealSection = ({ title, dishes, imgSrc }) => {
    let image = require("../../img/" + `${imgSrc}`)
    return (
        <div className={styles["type-container"]}>
            <h3>{title}</h3>
            <div className={styles["menu-content"]}>
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
                <img src={image} className={styles["food-type-illustration"]}></img>
            </div>
        </div>
    );
};
