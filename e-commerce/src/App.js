import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:categoryId" />
        <Route path="/:categoryId/:productId" />
      </Routes>
    </Layout>
  );
};

export default App;
