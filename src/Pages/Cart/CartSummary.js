
const CartSummary = ({ total }) => {
  return (
    <di className="cartSummary">
      <div><h1 style={{ fontSize: "2.5rem" }}>Order Summary</h1></div>
      <div><h1 style={{ fontSize: "1.5rem", marginTop: "6rem" }}>Total Price: $<span style={{fontWeight: ""}}>{total}</span></h1></div>
      <div><button className="summaryBtn">Procced to CheckOut</button></div>
    </di>
  );
};

export default CartSummary;
