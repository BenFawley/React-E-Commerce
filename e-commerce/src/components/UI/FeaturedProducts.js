import classes from "./FeaturedProducts.module.css";
import Product from "../Products/Product";
import { json, defer, Await, useLoaderData } from "react-router-dom";
import store from "../../store/redux.js";
import { productsApi } from "../../store/apiSlice.js";
import { Suspense } from "react";

const FeaturedProducts = () => {
  const { products } = useLoaderData();

  console.log(products);

  return (
    <Suspense fallback={<p className="centered">Loading...</p>}>
      <Await resolve={products}>
        {(products) => {
          return (
            <section className={classes.featuredWrapper}>
              <h1>New Releases</h1>
              <div className={classes.featuredProducts}>
                <ul>
                  {products.map((product) => {
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
        }}
      </Await>
    </Suspense>
  );
};

export default FeaturedProducts;

const loadFeaturedProducts = async () => {
  const data = store.dispatch(
    productsApi.endpoints.getFeaturedProducts.initiate()
  );
  try {
    const response = await data.unwrap();
    return response.products;
  } catch (e) {
    return json(
      { message: e.message || "Could not fetch products" },
      { status: 500 }
    );
  } finally {
    data.unsubscribe();
  }
};

export const loader = () => {
  return defer({
    products: loadFeaturedProducts(),
  });
};
