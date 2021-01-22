import "./CheckoutProduct.css";
import React from "react";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutprod">
      <img className="checkoutprod-img" src={image} alt="" />
      <div className="checkoutprod-info">
        <p className="checkoutprod-title">{title}</p>
        <p className="checkoutprod-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutprod-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
