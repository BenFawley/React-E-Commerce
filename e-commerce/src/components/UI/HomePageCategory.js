import { Link } from "react-router-dom";
import classes from "./HomePageCategory.module.css";

const HomePageCategory = ({ id, name, src, styleName }) => {
  return (
    <div className={`${classes[styleName]}`}>
      <Link to={`/${id}`}>
        <img src={src} alt="Category item" />
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default HomePageCategory;
