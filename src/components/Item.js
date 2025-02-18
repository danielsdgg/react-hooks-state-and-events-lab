import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, SetIsInCart] = useState(false);

  function handleAddToCartClick(){
    SetIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"}
      onClick={handleAddToCartClick}>
        {isInCart ? "Remove From" : "Add To"} Cart </button>
    </li>
  );
}

export default Item;
