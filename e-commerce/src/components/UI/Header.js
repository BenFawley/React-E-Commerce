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
            <h1>Logo</h1>
          </Link>
        </div>
        <nav className={classes.navWrapper}>
          <ul className={classes.categoryList}>
            <li>
              <NavLink to="/mens">Mens</NavLink>
            </li>
            <li>
              <NavLink to="/womens">Womens</NavLink>
            </li>
            <li>
              <NavLink to="/activewear">Activewear</NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.cartWrapper} onClick={toggleCartHandler}>
          <FontAwesomeIcon icon={faShoppingBag} size="xl" inverse />
          {cartQuantity > 0 && (
            <span className={classes.quantity}>{cartQuantity}</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
