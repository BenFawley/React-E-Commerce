import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../store/apiSlice";
import classes from "./ProductDetails.module.css";
import Accordion from "../UI/Accordion";
import { useDispatch } from "react-redux";
import cartSlice, { cartActions } from "../../store/cartSlice";

const ProductDetails = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading,
    data: product,
    error,
  } = useGetProductDetailsQuery(productId);

  console.log(product);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, " ");
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price.current.value,
        quantity: 1,
        name: product.name,
        // product.name is returning undefined
      })
    );
  };

  return (
    <div className={classes.productWrapper}>
      <div className={classes.galleryWrapper}>
        <div className={classes.smallGallery}>
          {/* add gallery component */}
          {product.media.images.map((image, idx) => {
            return (
              <img
                className={classes.imgSmall}
                key={idx}
                src={`https://${image.url}`}
                alt="product.name"
              />
            );
          })}
        </div>
        <div className={classes.largeGallery}>
          {product.media.images.map((image, idx) => {
            return (
              <img
                className={classes.imgBig}
                key={idx}
                src={`https://${image.url}`}
                alt="product.name"
              />
            );
          })}
        </div>
      </div>
      <div className={classes.productDetails}>
        <h1 className={classes.productName}>{product.name}</h1>
        <p className={classes.price}>£{product.price.current.value}</p>
        {product.variants.length > 1 && <h3>Size:</h3>}
        <div className={classes.sizeOptions}>
          {product.variants.length > 1 &&
            product.variants.map((option) => {
              return <div className={classes.size}>{option.brandSize}</div>;
            })}
        </div>
        <button className={classes.addToCart} onClick={addToCartHandler}>
          Add to Cart
        </button>
        <Accordion
          title="Description"
          content={removeTags(product.description)}
        />
        <Accordion
          title="About Me"
          content={removeTags(product.info.aboutMe)}
        />

        {product.info.sizeAndFit && (
          <Accordion
            title="Size & Fit"
            content={removeTags(product.info.sizeAndFit)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
