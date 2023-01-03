import { Link } from "react-router-dom";
import classes from "./BannerImg.module.css";

const BannerImg = ({ id, name, src }) => {
  return (
    <div className={classes.bannerItem}>
      <Link to={`/category/${id}`}>
        <img src={src} alt="Category item" />
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default BannerImg;
