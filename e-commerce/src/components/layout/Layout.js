import Header from "../UI/Header";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Layout = (props) => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Header />
      {showCart && <Cart />}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
