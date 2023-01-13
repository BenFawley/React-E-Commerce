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
        id={7078}
        src={Summer}
        styleName="bannerItem"
      />
      <HomePageCategory
        name="Activewear"
        id={26090}
        src={Activewear}
        styleName="bannerItem"
      />
      <HomePageCategory
        name="Winter Range"
        id={3606}
        src={Winter}
        styleName="bannerItem"
      />
    </div>
  );
};

export default HomeBanner;
