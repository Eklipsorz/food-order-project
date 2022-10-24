import './App.css';
import MainHeader from './components/Layout/MainHeader';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import React, { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <MainHeader onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
