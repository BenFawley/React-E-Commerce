import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, name, price, quantity, imgURL, size }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.cartItem}>
      <img
        className={classes.cartImage}
        src={`https://${imgURL[0]}`}
        alt="product"
      />
      <p>
        {name} <strong>{size && `(${size})`}</strong>
      </p>
      <div className={classes.quantity}>
        <div className={classes.minus} onClick={removeItem}></div>
        <p>{quantity}</p>
        <div className={classes.plus} onClick={addItem}></div>
      </div>
      <p>
        <strong>{`£${price}`}</strong>
      </p>
    </li>
  );
};

export default CartItem;

// {quantity}
