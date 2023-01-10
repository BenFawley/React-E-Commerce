import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Category from "./components/Products/Category.js";
import ProductDetails from "./components/Products/ProductDetails.js";
import Home from "./pages/Home";

const App = () => {
  // Set up the nested routes for category
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:categoryId/*" element={<Category />} />
        <Route path="/:categoryId/:productId" element={<ProductDetails />} />
        {/* <Route path="/:productId" element={<ProductDetails />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
