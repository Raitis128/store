import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import useOutsideClick from "./useOutsideClick";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRef = useRef<HTMLDivElement>(null);

  useOutsideClick(cartRef, () => dispatch(setIsCartOpen(false)));

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  }, [navigate, dispatch]);

  return (
    <CartDropdownContainer ref={cartRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
