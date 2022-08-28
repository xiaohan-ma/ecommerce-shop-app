import { useContext } from "react";
import { CartContext } from "../context/Cart";
import "../stylesheets/Featured.css";

function FeaturedProduct(props) {
  const { addToCart, cart } = useContext(CartContext);

  async function addItemToCart(event) {
    event.preventDefault();
    try {
      addToCart(props.data);
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="featuredItem">
      <div className="featuredImg">
        <img alt={props.data.desc} src={props.data.image} />
      </div>
      <div className="featuredDetails">
        <h2>{props.data.productName}</h2>
        <h3>£{props.data.price}</h3>
        <button className="addBtn" onClick={addItemToCart}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default FeaturedProduct;
