const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        //console.log("Already In Cart");
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    }
    case "DECREMENT": {
      const updatedCart = [...state.cart];
      const itemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateItem = { ...updatedCart[itemIndex] };
      //console.log(updateItem);
      if (updateItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filteredCart };
      } else {
        updateItem.quantity--;
        updatedCart[itemIndex] = updateItem;
        return { ...state, cart: updatedCart };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
