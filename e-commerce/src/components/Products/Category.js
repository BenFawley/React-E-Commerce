import classes from "./Category.module.css";
import { useEffect, useState } from "react";
import productSlice from "../../store/productSlice";
import { getProducts } from "../../api/api";

const Category = () => {
  // pull the category id in from the URL and pass it below to get the products
  useEffect(() => {
    getProducts(6993);
  }, []);
  return <div>Category</div>;
};

export default Category;
