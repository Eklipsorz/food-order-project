import { useContext } from 'react';
import styles from './MealItem.module.css';
import MainItemForm from './MealtemForm';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={styles['meal-item']}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles['meal-intro']}>{props.intro}</p>
        <p className={styles['meal-price']}>
          {Number.parseFloat(props.price).toFixed(2)}
        </p>
      </div>
      <MainItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default MealItem;
