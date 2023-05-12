import React from "react";
import "./CartPage.css";
import { useCart } from "../../Contexts/CartProvide";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartAction } from "../../Contexts/CartProvide";
import CartSummary from "./CartSummary";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartAction();
  if (!cart.length) {
    return <div className="empty_Cart">Cart is empty!</div>;
  }
  const incrementHanlder = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT", payload: cartItem });
  };
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
                  <button onClick={() => incrementHanlder(item)}>
                    <AiOutlinePlus />
                  </button>
                  {item.quantity}
                  <button onClick={() => decrementHandler(item)}>
                    <AiOutlineMinus />
                  </button>
                </div>
              </section>
            );
          })}
        </section>
        <CartSummary total={total} />
      </section>
    </main>
  );
};

export default CartPage;



