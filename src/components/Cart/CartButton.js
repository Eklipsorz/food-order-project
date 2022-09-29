import styles from './CartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const cartBtnClasses = `${styles['cart-button']} ${
    btnIsHighlighted ? styles['bump'] : ''
  }`;

  useEffect(() => {
    if (!items.length) {
      return;
    }

    setBtnIsHighlighted(true);

    const identifier = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(identifier);
    };
  }, [items]);

  return (
    <button className={cartBtnClasses} onClick={props.onClick}>
      <span className={styles['cart-icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['cart-badge']}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
