import classes from "./CategoryList.js";
import Category from "./Category.js";
import Dresses from "../images/categories/dresses.jpg";
import Womens from "../images/categories/womens.jpg";
import Footwear from "../images/categories/footwear.jpg";
import Coats from "../images/categories/coats.jpg";
import Tailored from "../images/categories/tailored.jpg";
import Accessories from "../images/categories/shirts.jpg";

const categories = [
  {
    id: "1",
    name: "Dresses",
    imgPath: Dresses,
  },
  {
    id: "2",
    name: "Womens",
    imgPath: Womens,
  },
  {
    id: "3",
    name: "Footwear",
    imgPath: Footwear,
  },
  {
    id: "4",
    name: "Coats/Jackets",
    imgPath: Coats,
  },
  {
    id: "5",
    name: "Tailored",
    imgPath: Tailored,
  },
  {
    id: "6",
    name: "Accessories",
    imgPath: Accessories,
  },
];

const CategoryList = () => {
  return categories.map((category) => {
    return (
      <Category
        key={category.id}
        id={category.id}
        name={category.name}
        src={category.imgPath}
        styleName="subCategory"
      />
    );
  });
};

export default CategoryList;
