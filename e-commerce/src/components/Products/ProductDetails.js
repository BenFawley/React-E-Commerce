import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../store/apiSlice";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  let { productId } = useParams();

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

  const addToCartHandler = () => {};

  return (
    <div className={classes.productWrapper}>
      <div className={classes.galleryWrapper}>
        <div className={classes.smallGallery}>
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
        <p>£{product.price.current.value}</p>
        <div>
          <p>Size:</p>
          {product.variants.length > 0 && (
            <select id="sizes">
              <option value="placeholder">-- Please Select --</option>
              {product.variants.map((option) => {
                return (
                  <option value={option.brandSize}>{option.brandSize}</option>
                );
              })}
            </select>
          )}
        </div>
        <button onClick={addToCartHandler}>Add to Cart</button>
        <div className={classes.accordion}>
          <p className={classes.accordionContent}>
            {removeTags(product.description)}
          </p>
        </div>
        <div className={classes.accordion}>
          <p className={classes.accordionContent}>
            {removeTags(product.info.aboutMe)}
          </p>
        </div>
        <div className={classes.accordion}>
          <p className={classes.accordionContent}>
            {removeTags(product.info.sizeAndFit)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
