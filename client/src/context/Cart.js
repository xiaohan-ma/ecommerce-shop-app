import { useReducer, createContext, useEffect } from "react";

let currentCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).cart
  : "";

export const initialCartState = {
  cart: [] || [currentCart],
  quantity: 0,
  totalCost: 0,
};

export const CartContext = createContext(initialCartState);

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        cart: [...state.cart, action.payload],
        quantity: state.quantity + action.payload.quantity,
        totalCost:
          state.totalCost +
          action.payload.quantity * action.payload.product.price,
      };
    case "DELETE_PRODUCT":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
        quantity: (state.quantity -= 1),
        totalCost: state.totalCost - action.payload.price,
      };
    case "EMPTY_PRODUCTS":
      return { cart: [], quantity: 0, totalCost: 0 };
    default:
      return state;
  }
};

export const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialCartState);

  // User to localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Add product to cart
  function addToCart(product, quantity) {
    dispatch({ type: "ADD_PRODUCT", payload: { product, quantity } });
  }

  // Remove product from cart
  function removeFromCart(productId) {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        quantity: state.quantity,
        totalCost: state.totalCost,
        dispatch,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
