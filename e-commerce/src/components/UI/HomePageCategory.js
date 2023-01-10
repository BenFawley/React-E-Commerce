import { Link } from "react-router-dom";
import classes from "./HomePageCategory.module.css";

const HomePageCategory = ({ id, name, src, styleName, path }) => {
  // const routingName = name.toLowerCase().trim().replace(/ +/g, "-");

  return (
    <div className={`${classes[styleName]}`}>
      <Link to={`/${id}`}>
        <img src={src} alt="Category item" />
        <h2>{name}</h2>
        {/* <div className={classes.test}></div> */}
      </Link>
    </div>
  );
};

export default HomePageCategory;
