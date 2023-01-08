import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import ProductDetails from "./components/Products/ProductDetails.js";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:categoryId" />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
