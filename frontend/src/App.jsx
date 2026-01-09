import { CartProvider } from "./components/context/CartContext";
import { CheckoutProvider } from "./components/context/CheckoutContext";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <CheckoutProvider>
        <AppRoutes />
      </CheckoutProvider>
    </CartProvider>
  );
};

export default App;
