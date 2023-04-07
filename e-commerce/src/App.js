import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Error from "./pages/Error.js";
import { loader as featuredProductsLoader } from "./components/UI/FeaturedProducts";
import { loader as productDetailsLoader } from "./components/Products/ProductDetails";
import { loader as categoryLoader } from "./components/Products/Category";
import Checkout from "./pages/Checkout.js";
//React Router V6.4 upgrade

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
        loader: featuredProductsLoader,
      },
      {
        path: ":categoryId",
        element: <ProductList />,
        loader: categoryLoader,
      },
      {
        path: "product/:productId",
        element: <Product />,
        loader: productDetailsLoader,
      },
      {
        path: "checkout",
        element: <Checkout />,
        // loader: productDetailsLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
