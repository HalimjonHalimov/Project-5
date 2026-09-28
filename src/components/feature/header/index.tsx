import { useProduct } from "../../../context/product/productContext";
import { useTheme } from "../../../context/theme/themeContext";

const Header = () => {
  const { state, dispatch } = useTheme();
  const { state: product } = useProduct();
  const totalPrice = product.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Shop App home page">
        <span className="brand-mark">S</span>
        <span>Shop App</span>
      </a>

      <div className="header-actions">
        <button
          className="theme-button"
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          <span aria-hidden="true">{state === "light" ? "☾" : "☀"}</span>
          {state === "light" ? "dark" : "light"} mode
        </button>
        <div className="cart-summary" aria-label="Cart status">
          <span className="cart-icon" aria-hidden="true">
            🛍
          </span>
          <span>
            <b>Cart</b>
            {totalPrice === 0 ? (
              <small>Your cart is empty</small>
            ) : (
              <small>{product.cart.length} products in your cart</small>
            )}
          </span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
