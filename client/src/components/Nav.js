import "../stylesheets/Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

function Nav() {
  const { user } = useContext(AuthContext);
  const { cart, quantity } = useContext(CartContext);

  return (
    <nav className="nav">
      <div className="navCategories">
        <ul>
          <li>
            <Link
              className="link"
              to={"/products/women"}
              state={{ state: "women" }}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={"/products/men"}
              state={{ state: "men" }}
            >
              Men
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/" className="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M192 159.1L224 159.1V32L192 32c-35.38 0-64 28.62-64 63.1S156.6 159.1 192 159.1zM0 415.1c0 35.37 28.62 64.01 64 64.01l32-.0103v-127.1l-32-.0005C28.62 351.1 0 380.6 0 415.1zM337.5 287.1c-35 0-76.25 13.12-104.8 31.1C208 336.4 188.3 351.1 128 351.1v128l57.5 15.98c26.25 7.25 53 13.13 80.38 15.01c32.63 2.375 65.63 .743 97.5-6.132C472.9 481.2 512 429.2 512 383.1C512 319.1 427.9 287.1 337.5 287.1zM491.4 7.252c-31.88-6.875-64.88-8.625-97.5-6.25C366.5 2.877 339.8 8.752 313.5 16L256 32V159.1c60.25 0 80 15.62 104.8 31.1c28.5 18.87 69.75 31.1 104.8 31.1C555.9 223.1 640 191.1 640 127.1C640 82.75 600.9 30.75 491.4 7.252z" />
          </svg>
          <h1>Golden Shoe</h1>
        </Link>
      </div>
      <div className="navBtn">
        {!user ? (
          <Link to="/login" className="link">
            <button id="accountBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
              </svg>
            </button>
          </Link>
        ) : (
          <Link to="/account" className="link">
            <button id="accountBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
              </svg>
            </button>
          </Link>
        )}
        <Link to="/shoppingcart" className="link">
          <button id="basketBtn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <span id="cartCount">{quantity}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
