import classes from "./FeaturedProducts.module.css";
import Product from "../Products/Product";
import { json } from "react-router-dom";
import store from "../../store/redux.js";
import {
  productsApi,
  useGetFeaturedProductsQuery,
} from "../../store/apiSlice.js";

const FeaturedProducts = () => {
  const { data } = useGetFeaturedProductsQuery();

  return (
    <section className={classes.featuredWrapper}>
      <h1>New Releases</h1>
      <div className={classes.featuredProducts}>
        <ul>
          {data.products.map((product) => {
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
    </section>
  );
};

export default FeaturedProducts;

export const loader = async () => {
  const data = store.dispatch(
    productsApi.endpoints.getFeaturedProducts.initiate()
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
