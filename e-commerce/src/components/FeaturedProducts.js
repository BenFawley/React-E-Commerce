import classes from "./FeaturedProducts.module.css";
import Product from "./Product";
import image from "../images/categories/womens.jpg";

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
  return (
    <section className={classes.featuredWrapper}>
      <h1>New Releases</h1>
      <div className={classes.featuredProducts}>
        <ul>
          {featuredProducts.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imgSrc={image}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProducts;
