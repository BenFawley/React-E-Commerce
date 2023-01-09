import classes from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({ id, name, description, price, imgSrc, colour }) => {
  return (
    <li className={classes.product}>
      <Link to={`/${id}`}>
        <div className={classes.productInfo}>
          <img src={imgSrc} alt="product" />
          <div className={classes.description}>
            <p>{description}</p>
          </div>
        </div>
        <div className={classes.productDetails}>
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </Link>
    </li>
  );
};

export default Product;
