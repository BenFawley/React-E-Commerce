import { json, defer, Await, useLoaderData, useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../store/apiSlice";
import classes from "./ProductDetails.module.css";
import Accordion from "../UI/Accordion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useState, Suspense } from "react";
import { uiAction } from "../../store/uiSlice";
import store from "../../store/redux.js";
import { productsApi } from "../../store/apiSlice.js";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductDetails = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [sizeError, setSizeError] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const { data: product } = useGetProductDetailsQuery(productId);

  let data = useLoaderData();

  data = data.data;

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
      dispatch(uiAction.toggle());
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
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={data}>
        {() => {
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
                        alt={product.name}
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
                        alt={product.name}
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
                            selectedSize === option.brandSize
                              ? classes.active
                              : ""
                          }`}
                          onClick={handleSizeSelection}
                          data-size={option.brandSize}
                        >
                          {option.brandSize}
                        </div>
                      );
                    })}
                </div>
                {sizeError && (
                  <p className={classes.error}>Please select a size</p>
                )}
                <button
                  className={classes.addToCart}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
                <Accordion
                  title="Description"
                  content={removeTags(product.description)}
                />
                <Accordion
                  title="More Information"
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
        }}
      </Await>
    </Suspense>
  );
};

export default ProductDetails;

const loadProductDetails = async (productId) => {
  const id = productId;

  const data = store.dispatch(
    productsApi.endpoints.getProductDetails.initiate(id)
  );
  try {
    const response = await data.unwrap();
    return response;
  } catch (e) {
    return json({ message: "Could not fetch products" }, { status: 500 });
  } finally {
    data.unsubscribe();
  }
};

export const loader = ({ params }) => {
  return defer({
    data: loadProductDetails(params.productId),
  });
};
