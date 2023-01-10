import classes from "./Category.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Category = () => {
  const [productList, setProductList] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(categoryId);
      setProductList(products);
    };

    fetchProducts();
  }, [categoryId]);
  return (
    <div className={classes.productList}>
      {productList.length > 0 ? (
        <ul>
          {productList.map((product) => {
            return (
              <Product
                key={product.productCode}
                id={product.productCode}
                name={product.name}
                description={"test"}
                price={product.price.value}
                imgSrc={product.imageUrl}
                colour={product.colour && product.colour}
                category={categoryId}
              />
            );
          })}
        </ul>
      ) : (
        <p>No products could be found...</p>
      )}
    </div>
  );
};

export default Category;
