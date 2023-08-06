import { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/AvailableMeals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };
 
  const hideCartHandler =()=>{
    setCartIsShown(false);
  };
  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
        <Meals />
      </main>
    </CartProvider>
   
  );
}
export default App;