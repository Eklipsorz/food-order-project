import React from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const CartItems = [
    {
      id: 'c1',
      name: 'Sushi',
      price: '22.99',
      amount: 2,
    },
    {
      id: 'c2',
      name: 'Schnitzel',
      intro: 'A german specialty!',
      price: '16.50',
      amount: 5,
    },
  ];

  return (
    <React.Fragment>
      <div className={styles['cart-items']}>
        {CartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </div>
      <div className={styles['total']}>
        <h3>Total Amount</h3>
        <h3>$33.00</h3>
      </div>
      <div className={styles['action']}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </React.Fragment>
  );
};

export default Cart;
