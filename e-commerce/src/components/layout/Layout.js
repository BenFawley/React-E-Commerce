import Header from "../UI/Header";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Footer from "../UI/Footer";

const Layout = (props) => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <Cart className="active" />}
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
