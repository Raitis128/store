import { useContext, useRef, useEffect } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartIconRef = useRef(null);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartIconRef.current && !cartIconRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <div
      className="cart-icon-container"
      ref={cartIconRef}
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
