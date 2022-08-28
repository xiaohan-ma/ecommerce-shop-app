import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cart";
import "../stylesheets/ShoppingCart.css";
import CartProductContainer from "../components/CartProductContainer";
import StripeCheckout from "react-stripe-checkout";
import { AuthContext } from "../context/Auth";
import { newOrder } from "../plugin/Orders";

const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

const ShoppingCart = () => {
  const { user } = useContext(AuthContext);
  const { addToCart, removeFromCart, quantity, totalCost, cart } =
    useContext(CartContext);
  const [stripeToken, setStripeToken] = useState(null);

  function onToken(token) {
    setStripeToken(token);
  }

  useEffect(() => {
    const request = async () => {
      try {
        await newOrder({ tokenId: stripeToken.id, amount: 500 });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && request();
  }, [stripeToken, totalCost]);

  return (
    <div className="container">
      <div className="cartContainer">
        <div className="cartTitle">
          <div id="line"></div>

          <h2>My cart ({quantity})</h2>
          <div id="line"></div>
        </div>
        <div className="cartCollection">
          {cart.map((value, index) => {
            return <CartProductContainer data={value} key={index} />;
          })}
        </div>
        <div className="totalSection">
          <h2>Total</h2>
          <div id="line"></div>

          <div className="total">
            <div id="totalTitle">
              <h3>Subtotal</h3>
              <h3>Shipping</h3>
            </div>
            <div id="totalCost">
              <h3>£{totalCost}</h3>
              <h3>FREE</h3>
            </div>
          </div>
          <div id="line"></div>

          <div id="total">
            <h3>Total (incl VAT)</h3>
            <h3>£{totalCost}</h3>
          </div>
          <div className="checkoutBtnContainer">
            {!user ? (
              <h3>Please login first!</h3>
            ) : (
              <StripeCheckout
                name="Golden Shoes"
                billingAddress
                shippingAddress
                description={`Your total is £${totalCost}`}
                amount={totalCost * 100}
                token={onToken}
                stripeKey={STRIPE_KEY}
              >
                <button className="checkoutBtn" type="button">
                  Order
                </button>
              </StripeCheckout>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
