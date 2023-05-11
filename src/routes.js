import HomePage from "./Pages/Home/HomePage";
import CartPage from "./Pages/Cart/CartPage";

const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/cart",
    element: CartPage,
  },
];

export default routes;
