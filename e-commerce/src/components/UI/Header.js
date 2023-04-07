import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { uiAction } from "../../store/uiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartIcon from "../../images/cart-svgrepo-com.svg";
import Search from "../../images/search-magnifying-glass-svgrepo-com.svg";

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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/" + 16691}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/" + 16661}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Womens
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/" + 4209}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Footwear
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/" + 7046}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sale
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.iconWrapper}>
          <img src={Search} alt="Search" />
          <div className={classes.cartWrapper} onClick={toggleCartHandler}>
            <img src={CartIcon} alt="Cart Icon" />
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
