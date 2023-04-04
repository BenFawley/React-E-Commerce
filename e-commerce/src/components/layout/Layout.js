import Header from "../UI/Header";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <Header />
      {showCart && <Cart className="active" />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
