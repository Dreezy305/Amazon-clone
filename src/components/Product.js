import "./Product.css";
import React from "react";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="pro-description">
        <p>{title}</p>
        <p className="prod-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prod-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img className="prod-img" src={image} alt="" />
      <button className="prod-button" onClick={addToBasket}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
