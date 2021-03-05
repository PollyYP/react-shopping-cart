import React, { useState } from "react";
import { ProductContext } from "./Contexts/ProductContext";
import { CartContext } from "./Contexts/CartContext";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = () => {
    setCart((item) => {
      return [...item, item];
    });
  };

  return (
    <div className="App">
      <ProductContext.Provider
        value={{
          products,
          addItem,
        }}
      >
        <CartContext.Provider value={{ cart }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
