import classes from "./Category.module.css";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { useGetCategoryProductsQuery } from "../../store/apiSlice";
import LoadingSpinner from "../UI/LoadingSpinner";

const Category = () => {
  let { categoryId } = useParams();

  const {
    isLoading,
    data: productList,
    error,
  } = useGetCategoryProductsQuery(categoryId);

  console.log(productList);

  if (isLoading) {
    return (
      <div className={classes.centered}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.centered}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={classes.productList}>
      <h1></h1>
      {productList && (
        <ul>
          {productList.products.map((product) => {
            return (
              <Product
                key={product.productCode}
                id={product.productCode}
                name={product.name}
                description={product.name}
                price={product.price.value}
                imgSrc={product.imageUrl}
                colour={product.colour && product.colour}
                category={categoryId}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Category;
