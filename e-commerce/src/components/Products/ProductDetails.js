import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../store/apiSlice";
import classes from "./ProductDetails.module.css";
import Accordion from "../UI/Accordion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useState } from "react";

const ProductDetails = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [sizeError, setSizeError] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [active, setActive] = useState(false);

  const {
    isLoading,
    data: product,
    error,
  } = useGetProductDetailsQuery(productId);

  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>;
  }

  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, " ");
  };

  const addToCartHandler = () => {
    if (selectedSize === null && product.variants.length > 1) {
      setSizeError(true);
      return;
    } else {
      dispatch(
        cartActions.addItemToCart({
          id: selectedSize ? `${product.id}-${selectedSize}` : product.id,
          price: product.price.current.value,
          quantity: 1,
          name: product.name,
          imgURL: product.media.images.map((image) => image.url),
          size: selectedSize ? selectedSize : null,
        })
      );
      setSelectedSize(null);
    }
  };

  const handleSizeSelection = (e) => {
    setSizeError(false);
    e.target.dataset.size === selectedSize
      ? setSelectedSize("")
      : setSelectedSize(e.target.dataset.size);
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
              return (
                <div
                  key={option.brandSize}
                  className={`${classes.size} ${
                    selectedSize === option.brandSize ? classes.active : ""
                  }`}
                  onClick={handleSizeSelection}
                  data-size={option.brandSize}
                >
                  {option.brandSize}
                </div>
              );
            })}
        </div>
        {sizeError && <p className={classes.error}>Please select a size</p>}
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
