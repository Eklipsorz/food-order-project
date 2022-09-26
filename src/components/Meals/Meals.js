import MealItem from './MealItem';
import styles from './Meals.module.css';

const Meals = (props) => {
  const { meals } = props;
  return (
    <form class={styles['meals-list']}>
      {meals.map((meal) => (
        <MealItem
          name={meal.name}
          intro={meal.intro}
          price={meal.price}
        ></MealItem>
      ))}
    </form>
  );
};

export default Meals;
