import React from "react";
import * as data from "../../data";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main>
      <section className="productList">
        {data.products.map((product) => {
          return (
            <section className="products">
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
                <button>Add to Cart</button>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
