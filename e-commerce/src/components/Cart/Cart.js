import { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/uiSlice";

const Cart = (props) => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const visible = useSelector((state) => state.ui.cartIsVisible);

  console.log(cart);

  useEffect(() => {
    if (visible) {
      setShowCart(true);
    }
  }, [visible, showCart]);

  const closeCartHandler = () => {
    dispatch(uiAction.toggle());
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
            return <li>{item.name}</li>;
          })}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
