import classes from "./Cart.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.ui.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Shopping Cart</h2>
      <ul>
        {/* {cartItems.map((item)=>{
            return 
        })} */}
      </ul>
    </Card>
  );
};

export default Cart;
