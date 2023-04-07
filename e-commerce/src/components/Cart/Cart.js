import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/uiSlice";
import { cartActions } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const visible = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    if (visible) {
      setShowCart(true);
    }
  }, [visible, showCart]);

  const closeCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  const emptyCart = <p>You have no items in the cart.</p>;

  return (
    <Card className={`${classes.cart} ${showCart ? classes.active : ""}`}>
      <div className={classes.cartHeader}>
        <h2>Shopping Cart</h2>
        <FontAwesomeIcon
          className={classes.close}
          icon={faX}
          onClick={closeCartHandler}
        />
      </div>
      {cart.totalQuantity < 1 ? (
        emptyCart
      ) : (
        <ul>
          {cart.items.map((item) => {
            return (
              <CartItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                imgURL={item.imgURL}
                size={item.size}
              />
            );
          })}
        </ul>
      )}
      {cart.totalQuantity > 0 && (
        <>
          <div className={classes.cartTotal}>
            <p>{`Total: £${cart.totalPrice}`}</p>
          </div>
          <div className={classes.checkoutWrapper}>
            <p className={classes.clearCart} onClick={clearCartHandler}>
              Clear cart
            </p>
            <Link to={"checkout"} className={classes.checkout}>
              Checkout
            </Link>
          </div>
        </>
      )}
    </Card>
  );
};

export default Cart;
