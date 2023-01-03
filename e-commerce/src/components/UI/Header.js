import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
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
      <div className={classes.icons}>Placeholder</div>
    </header>
  );
};

export default Header;
