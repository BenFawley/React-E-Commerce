import classes from "./Category.module.css";
import Product from "./Product";
import { useGetCategoryProductsQuery } from "../../store/apiSlice";
import store from "../../store/redux.js";
import { productsApi } from "../../store/apiSlice.js";
import { json, useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { data: productList } = useGetCategoryProductsQuery(categoryId);

  console.log(productList);

  return (
    <div className={classes.productList}>
      {productList && (
        <div className={classes.productList}>
          <h1>{productList.categoryName}</h1>
          <ul>
            {productList.products.map((product) => {
              return (
                <Product
                  key={product.productCode}
                  id={product.id}
                  name={product.name}
                  description={product.name}
                  price={product.price.current.value}
                  imgSrc={product.imageUrl}
                  colour={product.colour && product.colour}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Category;

export const loader = async ({ params }) => {
  const id = params.categoryId;

  const data = store.dispatch(
    productsApi.endpoints.getCategoryProducts.initiate(id)
  );
  try {
    const response = await data.unwrap();
    return response;
  } catch (e) {
    return json({ message: "Could not fetch products" }, { status: 500 });
  } finally {
    data.unsubscribe();
  }
};
