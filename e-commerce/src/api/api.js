import store from "../store/redux.js";
import { productsApi } from "../store/apiSlice.js";

export const getFeaturedProducts = async () => {
  const data = store.dispatch(
    productsApi.endpoints.getFeaturedProducts.initiate()
  );
  try {
    const response = await data.unwrap();
    return response;
  } catch (e) {
    console.log(e);
  } finally {
    data.unsubscribe();
  }
};
