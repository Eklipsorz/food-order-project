import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles['summary']}>
          <span className={styles['price']}>{props.price}</span>
          <span className={styles['amount']}>{props.amount}</span>
        </div>
      </div>

      <div className={styles['actions']}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
