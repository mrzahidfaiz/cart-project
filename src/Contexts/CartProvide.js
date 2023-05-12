import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const cartContext = createContext();
const cartContextDispatcher = createContext();

const initialState = {
    cart: [],
    total: 0,
}

const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    return(
        <cartContext.Provider value={cart}>
            <cartContextDispatcher.Provider value={dispatch}>
                {children}
            </cartContextDispatcher.Provider>
        </cartContext.Provider>
    );
}


export default CartProvider;

export const useCart = () => useContext(cartContext);
export const useCartAction = () => useContext(cartContextDispatcher);