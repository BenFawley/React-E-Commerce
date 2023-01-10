import classes from "./HomeBanner.module.css";
import HomePageCategory from "./HomePageCategory";
import Summer from "../../images/categories/summer.jpg";
import Winter from "../../images/categories/winter.jpg";
import Activewear from "../../images/categories/activewear.jpg";

const HomeBanner = () => {
  return (
    <div className={classes.homebanner}>
      <HomePageCategory
        name="Summer Range"
        id="summer"
        src={Summer}
        styleName="bannerItem"
      />
      <HomePageCategory
        name="Activewear"
        id="activewear"
        src={Activewear}
        styleName="bannerItem"
      />
      <HomePageCategory
        name="Winter Range"
        id="winter"
        src={Winter}
        styleName="bannerItem"
      />
    </div>
  );
};

export default HomeBanner;
