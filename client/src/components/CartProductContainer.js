import { useContext } from "react";
import { CartContext } from "../context/Cart";
import "../stylesheets/CartProductContainer.css";

function CartProductContainer(props) {
  function handleChange(event) {
    event.preventDefault();
  }

  return (
    <div className="cartProductContainer">
      <div className="cartImg">
        <img alt={props.data.product.desc} src={props.data.product.image} />
      </div>
      <div className="cartProductDetail">
        <h2>{props.data.product.productName}</h2>
        <h3>£{props.data.product.price}</h3>
      </div>
      <div className="amountContainer">
        <h3>{props.data.quantity}</h3>
      </div>
    </div>
  );
}

export default CartProductContainer;
