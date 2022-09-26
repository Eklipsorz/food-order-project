import React from 'react';
import MainBanner from './MainBanner';

import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className={styles['main-banner']}>
        <img alt='meals' src='./meals.jpg' />
        <div>aweawe</div>
      </div>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <button>Your Cart</button>
      </div>

      {/* <MainBanner /> */}
    </React.Fragment>
  );
};

export default MainHeader;
