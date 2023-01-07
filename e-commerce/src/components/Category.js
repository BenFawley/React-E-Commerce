import { Link } from "react-router-dom";
import classes from "./Category.module.css";

const Category = ({ id, name, src, styleName }) => {
  return (
    <div className={`${classes[styleName]}`}>
      <Link to={`/category/${id}`}>
        <img src={src} alt="Category item" />
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default Category;
