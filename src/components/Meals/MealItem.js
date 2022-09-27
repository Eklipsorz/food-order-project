import styles from './MealItem.module.css';
import MainItemForm from './MealtemForm';

const MealItem = (props) => {
  return (
    <div className={styles['meal-item']}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles['meal-intro']}>{props.intro}</p>
        <p className={styles['meal-price']}>{`${props.price}`}</p>
      </div>
      <MainItemForm id={props.id} />
    </div>
  );
};

export default MealItem;
