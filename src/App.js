import './App.css';
import MainHeader from './components/Layout/MainHeader';
import Meals from './components/Meals/Meals';
import React from 'react';

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
  const meals = DUMMY_DATA;

  return (
    <React.Fragment>
      <MainHeader />
      <Meals meals={meals} />
    </React.Fragment>
  );
}

export default App;
