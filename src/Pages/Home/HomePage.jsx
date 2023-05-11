import React from "react";
import * as data from "../../data";
import "./HomePage.css";
import { useCartAction } from "../../Contexts/CartProvide";

const HomePage = () => {
  const dispatch = useCartAction();

  const addProductToCartHandler = (product) => {
    dispatch({type: "ADD_TO_CART", payload: product})
  }
  return (
    <main>
      <section className="productList">
        {data.products.map((product) => {
          return (
            <section className="products" key={product.id}>
              <div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
              <div>
                <h3>Price: ${product.price}</h3>
              </div>
              <div className="cart_btn">
                <button onClick={() => addProductToCartHandler(product)}>Add to Cart</button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
