export const SectionItem = ({ foodName, price, description }) => {
    console.log(foodName, price, description)
    return (
        <li>
            <span class="menu-item">
                <div class="menu-item-info">
                    <strong>{foodName}</strong>
                    <span class="price">{price}$</span>
                </div>
                <p>{description}</p>
            </span>
        </li>
    );
};
