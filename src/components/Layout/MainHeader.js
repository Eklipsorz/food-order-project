import React from 'react';
import MainBanner from './MainBanner';

import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <MainBanner />
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <button>Your Cart</button>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
