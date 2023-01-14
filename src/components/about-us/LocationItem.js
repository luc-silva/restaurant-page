import styles from "./LocationItem.module.css";

export const LocationItem = ({city, state, streetAddress}) => {
    return (
        <li className={styles["location-region-item"]}>
            <div className={styles["item-state"]}>
                <strong>{city}</strong>
                <span>{state}</span>
            </div>
            <p>{streetAddress}</p>
        </li>
    );
};
