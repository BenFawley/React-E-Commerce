import classes from "./HomeBanner.module.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className={classes.homebanner}>
      <div className={classes.bannerModel}></div>
      <div className={classes.bannerTextWrapper}>
        <div className={classes.bannerText}>
          <h1>
            <span>Elevate</span> your style
            <br />
            Shop our new <br />
            arrivals now!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
            unde quod. Corporis non tempore aperiam incidunt facere velit
            inventore dolores quidem nobis cupiditate esse
          </p>
          <Link className={classes.bannerCTA} to={"/" + 16691}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
