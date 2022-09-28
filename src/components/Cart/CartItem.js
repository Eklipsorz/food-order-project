import styles from './CartItem.module.css';
import NumberInput from '../UI/Input/NumberInput';
const CartItem = (props) => {
  return (
    <div className={styles['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles['summary']}>
          <h3 className={styles['price']}>{props.price}</h3>

          <NumberInput
            attr={{
              id: `cart-item-${props.id}`,
              type: 'number',
              min: '1',
              max: '99',
              step: '1',
              defaultValue: props.amount,
            }}
          />
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
