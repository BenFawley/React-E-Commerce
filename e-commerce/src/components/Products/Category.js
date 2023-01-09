import classes from "./Category.module.css";
import { useEffect, useState } from "react";
import productSlice from "../../store/productSlice";
import { getCategories, getProducts } from "../../api/api";

const Category = () => {
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Category</div>;
};

export default Category;
