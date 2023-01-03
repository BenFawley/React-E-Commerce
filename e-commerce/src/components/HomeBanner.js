import classes from "./HomeBanner.module.css";
import BannerImg from "./BannerImg";
import Summer from "../images/assets/summer.jpg";
import Winter from "../images/assets/winter.jpg";
import Activewear from "../images/assets/activewear.jpg";

const HomeBanner = () => {
  return (
    <div className={classes.homebanner}>
      <BannerImg name="Summer Range" id="swimwear" src={Summer} />
      <BannerImg name="Activewear" id="activewear" src={Activewear} />
      <BannerImg name="Winter Range" id="winter" src={Winter} />
    </div>
  );
};

export default HomeBanner;
