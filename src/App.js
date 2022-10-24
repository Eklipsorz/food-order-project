import './App.css';
import MainHeader from './components/Layout/MainHeader';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import React, { useState, useEffect, useCallback } from 'react';
import CartProvider from './store/CartProvider';

const DUMMY_DATA = [
  {
    id: 'e1',
    name: 'Sushi',
    intro: 'Finest fish and veggies',
    price: '22.99',
  },
  {
    id: 'e2',
    name: 'Schnitzel',
    intro: 'A german specialty!',
    price: '16.50',
  },
  {
    id: 'e3',
    name: 'Barbecue Burger',
    intro: 'American, raw, meaty',
    price: '12.99',
  },
  {
    id: 'e4',
    name: 'Green Bowl',
    intro: 'Healthy...and green...',
    price: '18.99',
  },
];

function App() {
  const [meals, setMeals] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      'https://react-test-http-d24a5-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
    );

    const data = await response.json();
    const transformedMeals = [];

    for (let key in data) {
      transformedMeals.push({
        id: key,
        name: data[key].name,
        intro: data[key].intro,
        price: data[key].price,
      });
    }
    setMeals(transformedMeals);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      <Meals meals={meals} />
    </CartProvider>
  );
}

export default App;
