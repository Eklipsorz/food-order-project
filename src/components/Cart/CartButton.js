import styles from './CartButton.module.css';
import CartIcon from './CartIcon';
const CartButton = (props) => {
  return (
    <button className={styles['cart-button']} onClick={props.onClick}>
      <span className={styles['cart-icon']}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles['cart-badge']}>2</span>
    </button>
  );
};

export default CartButton;
