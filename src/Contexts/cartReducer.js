const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //console.log(state);
      const updatedCart = [...state.cart];
      //console.log(updatedCart);
      const index = updatedCart.findIndex((item) => item.id === action.payload.id);
      //console.log(index);
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        console.log("Already In Cart");
      }
      return { ...state, cart: updatedCart };
    }
    default:
      return state;
  }
};

export default cartReducer;
