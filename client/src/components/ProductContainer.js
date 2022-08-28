import { useContext, useState } from "react";
import { CartContext } from "../context/Cart";
import "../stylesheets/ProductContainer.css";

function ProductContainer(props) {
  const { addToCart, cart, totalCost } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  function handleQuantity(type) {
    if (type == "decrement") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function addItemToCart(event) {
    event.preventDefault();
    try {
      addToCart(props.data, quantity);
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="productContainer">
      <div className="productImgContainer">
        <img alt={props.data.desc} src={props.data.image} />
      </div>
      <div className="productDetailsContainer">
        <h2>{props.data.productName}</h2>
        <h3>£{props.data.price}</h3>
        <div id="quantitySelect">
          <button id="add" onClick={() => handleQuantity("increment")}>
            +
          </button>
          <h4>{quantity}</h4>
          <button id="decrease" onClick={() => handleQuantity("decrement")}>
            -
          </button>
        </div>
        <button className="addBtn" onClick={addItemToCart}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default ProductContainer;
