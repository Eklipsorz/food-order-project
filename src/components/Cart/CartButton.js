import styles from './CartButton.module.css';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log('item', cartCtx);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    console.log('item', item);
    return curNumber + item.amount;
  }, 0);
  console.log('numberOfCartItems', numberOfCartItems);
  return (
    <button className={styles['cart-button']} onClick={props.onClick}>
      <span className={styles['cart-icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['cart-badge']}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
