import React from "react";
import { useStateValue } from "../../../StateProvider/StateProvider";
import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";



function CheckProduct({ id, image, title, price, rating }) {

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  const [{basket}, dispatch] = useStateValue();
     
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkout_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckProduct;
