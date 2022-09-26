import './App.css';
import MainHeader from './components/Layout/MainHeader';
import MainBanner from './components/Layout/MainBanner';
import Meals from './components/Meals/Meals';
import React from 'react';

const DUMMY_DATA = [
  {
    name: 'Sushi',
    intro: 'Finest fish and veggies',
    price: 2290,
  },
  {
    name: 'Schnitzel',
    intro: 'A german specialty!',
    price: 1650,
  },
  {
    name: 'Barbecue Burger',
    intro: 'American, raw, meaty',
    price: 1299,
  },
  {
    name: 'Green Bowl',
    intro: 'Healthy...and green...',
    price: 1899,
  },
];

function App() {
  const meals = DUMMY_DATA;
  return (
    <React.Fragment>
      <MainHeader />
      <Meals meals={meals} />
    </React.Fragment>
  );
}

export default App;
