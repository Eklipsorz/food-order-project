import React from 'react';
import MainBanner from './MainBanner';
const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div>
        <h2>ReactMeals</h2>
        <button>Your Cart</button>
      </div>
      <MainBanner />
    </React.Fragment>
  );
};

export default MainHeader;
