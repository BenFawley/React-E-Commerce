import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { uiAction } from "../../store/uiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.logo}>
          <Link to="/">
            <h1>
              Apparel<span>Store</span>
            </h1>
          </Link>
        </div>
        <nav className={classes.navWrapper}>
          <ul className={classes.categoryList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/" + 16691}>Men</NavLink>
            </li>
            <li>
              <NavLink to={"/" + 16661}>Womens</NavLink>
            </li>
            <li>
              <NavLink to={"/" + 4209}>Footwear</NavLink>
            </li>
            <li>
              <NavLink to={"/" + 7046}>Sale</NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.iconWrapper}>
          <div className={classes.cartWrapper} onClick={toggleCartHandler}>
            <FontAwesomeIcon icon={faShoppingBag} size="xl" />
            {cartQuantity > 0 && (
              <span className={classes.quantity}>{cartQuantity}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
