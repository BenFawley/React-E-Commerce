import classes from "./Category.module.css";
import Product from "./Product";
import store from "../../store/redux.js";
import { productsApi } from "../../store/apiSlice.js";
import { json, defer, useLoaderData, Await } from "react-router-dom";
// import Siderbar from "../UI/Siderbar";
import { Suspense } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const Category = () => {
  // const { categoryId } = useParams();
  // const { data } = useGetCategoryProductsQuery(categoryId);
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={data}>
        {(data) => {
          return (
            <div className={classes.categoryWrapper}>
              <h1>{data && data.name}</h1>
              {data && (
                <div className={classes.productList}>
                  {/* <Siderbar /> */}
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
              )}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default Category;

const loadCategoryPage = async (categoryId) => {
  const id = categoryId;

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

export const loader = ({ params }) => {
  return defer({
    data: loadCategoryPage(params.categoryId),
  });
};
