import React from "react";
import "./CartPage.css";
import { useCart } from "../../Contexts/CartProvide";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartPage = () => {
  const { cart } = useCart();
  if (!cart.length) {
    return <div>Cart is empty!</div>;
  }
  return (
    <main className="container">
      <section className="cartCenter">
        <section className="cartItemList">
          {cart.map((item) => {
            return (
              <section className="cartItem">
                <div className="cartItemImage">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div>
                  <h1 style={{ fontSize: "1.8rem" }}>{item.title}</h1>
                </div>
                <div>
                  <span style={{ fontSize: "1.5rem", color: "#9f0c0f" }}>
                    Price: ${item.price}
                  </span>
                </div>
                <div className="itemControl">
                  <button>
                    <AiOutlinePlus />
                  </button>
                  {item.quantity}
                  <button>
                    <AiOutlineMinus />
                  </button>
                </div>
              </section>
            );
          })}
        </section>
        <section className="cartSummary">Order Summary</section>
      </section>
    </main>
  );
};

export default CartPage;
