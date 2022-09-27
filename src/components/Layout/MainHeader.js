import React from 'react';
import MainBanner from './MainBanner';
import CartButton from '../Cart/CartButton';

import styles from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <CartButton onClick={props.onShowCart} />
      </div>
      <MainBanner />
    </React.Fragment>
  );
};

export default MainHeader;
