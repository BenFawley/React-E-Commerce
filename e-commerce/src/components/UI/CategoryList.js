import classes from "./CategoryList.module.css";
import Dresses from "../../images/categories/dresses.jpg";
import Womens from "../../images/categories/womens.jpg";
import Footwear from "../../images/categories/footwear.jpg";
import Coats from "../../images/categories/coats.jpg";
import Tailored from "../../images/categories/tailored.jpg";
import Accessories from "../../images/categories/shirts.jpg";
import HomePageCategory from "./HomePageCategory.js";

const categories = [
  {
    id: 8799,
    name: "Dresses",
    url: "dresses",
    imgPath: Dresses,
  },
  {
    id: "womens",
    name: "Womens",
    url: "womens",
    imgPath: Womens,
  },
  {
    id: 4209,
    name: "Footwear",
    url: "footwear",
    imgPath: Footwear,
  },
  {
    id: 3606,
    name: "Coats/Jackets",
    url: "coats-jackets",
    imgPath: Coats,
  },
  {
    id: 5678,
    name: "Tailored",
    url: "tailored",
    imgPath: Tailored,
  },
  {
    id: 19855,
    name: "Accessories",
    url: "accessories",
    imgPath: Accessories,
  },
];

const CategoryList = () => {
  return (
    <section className={classes.categoryWrapper}>
      <h1 className={classes.sectionTitle}>Shop Range</h1>
      <div className={classes.categoryList}>
        {categories.map((category) => {
          return (
            <HomePageCategory
              key={category.id}
              id={category.id}
              name={category.name}
              src={category.imgPath}
              styleName="subCategory"
              path={category.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
