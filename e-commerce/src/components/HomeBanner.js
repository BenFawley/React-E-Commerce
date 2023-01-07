import classes from "./HomeBanner.module.css";
import Category from "./Category";
import Summer from "../images/categories/summer.jpg";
import Winter from "../images/categories/winter.jpg";
import Activewear from "../images/categories/activewear.jpg";

const HomeBanner = () => {
  return (
    <div className={classes.homebanner}>
      <Category
        name="Summer Range"
        id="swimwear"
        src={Summer}
        styleName="bannerItem"
      />
      <Category
        name="Activewear"
        id="activewear"
        src={Activewear}
        styleName="bannerItem"
      />
      <Category
        name="Winter Range"
        id="winter"
        src={Winter}
        styleName="bannerItem"
      />
    </div>
  );
};

export default HomeBanner;
