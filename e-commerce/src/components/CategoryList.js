import classes from "./CategoryList.module.css";
import Category from "./Category.js";
import Dresses from "../images/categories/dresses.jpg";
import Womens from "../images/categories/womens.jpg";
import Footwear from "../images/categories/footwear.jpg";
import Coats from "../images/categories/coats.jpg";
import Tailored from "../images/categories/tailored.jpg";
import Accessories from "../images/categories/shirts.jpg";

const categories = [
  {
    id: "dresses",
    name: "Dresses",
    imgPath: Dresses,
  },
  {
    id: "womens",
    name: "Womens",
    imgPath: Womens,
  },
  {
    id: "footwear",
    name: "Footwear",
    imgPath: Footwear,
  },
  {
    id: "coats",
    name: "Coats/Jackets",
    imgPath: Coats,
  },
  {
    id: "tailored",
    name: "Tailored",
    imgPath: Tailored,
  },
  {
    id: "accessories",
    name: "Accessories",
    imgPath: Accessories,
  },
];

const CategoryList = () => {
  return (
    <section className={classes.categoryWrapper}>
      <h1 className={classes.sectionTitle}>Shop Range</h1>
      <div className={classes.categoryList}>
        {categories.map((category, idx) => {
          return (
            <Category
              key={idx}
              id={category.id}
              name={category.name}
              src={category.imgPath}
              styleName="subCategory"
            />
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
