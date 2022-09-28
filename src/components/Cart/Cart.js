import { useContext } from 'react';
import React from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const addToItemHandler = () => {};
  const removeItemHandler = () => {};
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onHideCart}>
      <div className={styles['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addToItemHandler.bind(null, item.id)}
            onRemove={removeItemHandler.bind(null, item.id)}
          />
        ))}
      </div>
      <div className={styles['total']}>
        <h3>Total Amount</h3>
        <h3>${totalAmount}</h3>
      </div>
      <div className={styles['actions']}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
