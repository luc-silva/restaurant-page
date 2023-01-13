import styles from "./SectionItem.module.css"

export const SectionItem = ({ foodName, price, description }) => {
    console.log(foodName, price, description)
    return (
        <li>
            <span className={styles["menu-item"]}>
                <div className={styles["menu-item-info"]}>
                    <strong>{foodName}</strong>
                    <span className={styles["price"]}>{price}$</span>
                </div>
                <p>{description}</p>
            </span>
        </li>
    );
};
