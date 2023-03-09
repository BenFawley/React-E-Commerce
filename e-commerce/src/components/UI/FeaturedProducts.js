import classes from "./FeaturedProducts.module.css";
import Product from "../Products/Product";
import image from "../../images/categories/womens.jpg";
import { useGetFeaturedProductsQuery } from "../../store/apiSlice";
import LoadingSpinner from "./LoadingSpinner";

const featuredProducts = [
  {
    id: "1",
    name: "Test",
    description: "",
    price: 22,
    imgSrc: "",
  },
  {
    id: "2",
    name: "Test",
    description: "",
    price: 22,
    imgSrc: "",
  },
  {
    id: "3",
    name: "Test",
    description: "",
    price: 22,
    imgSrc: "",
  },
  {
    id: "4",
    name: "Test",
    description: "",
    price: 22,
    imgSrc: "",
  },
];

const FeaturedProducts = () => {
  const { isLoading, data: productList, error } = useGetFeaturedProductsQuery();

  console.log(productList);

  if (isLoading) {
    return (
      <div className={classes.centered}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.centered}>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <section className={classes.featuredWrapper}>
      <h1>New Releases</h1>
      <div className={classes.featuredProducts}>
        <ul>
          {productList.products.map((product) => {
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
    </section>
  );
};

export default FeaturedProducts;
