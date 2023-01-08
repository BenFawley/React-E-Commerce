import HomeBanner from "../components/UI/HomeBanner";
import CategoryList from "../components/UI/CategoryList";
import FeaturedProducts from "../components/UI/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <FeaturedProducts />
      <CategoryList />
    </>
  );
};

export default Home;
