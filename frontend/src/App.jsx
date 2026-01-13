import { CheckoutProvider } from "./components/context/CheckoutContext";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <CheckoutProvider>
      <AppRoutes />
    </CheckoutProvider>
  );
};

export default App;
