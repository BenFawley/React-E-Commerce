import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { uiAction } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.logo}>
          <h1>Logo</h1>
        </div>
        <nav className={classes.navWrapper}>
          <ul className={classes.categoryList}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
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
          <FontAwesomeIcon icon={faCartShopping} size="xl" inverse />
          <span className={classes.quantity}>11</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
