import MealItem from './MealItem';
import styles from './Meals.module.css';

const Meals = (props) => {
  const { meals } = props;

  return (
    <div className={styles['meals-list']}>
      {meals.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          intro={meal.intro}
          price={meal.price}
        ></MealItem>
      ))}
    </div>
  );
};

export default Meals;
