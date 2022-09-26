import MealItem from './MealItem';
const Meals = (props) => {
  const { meals } = props;
  return (
    <ul>
      {meals.map((meal) => (
        <MealItem
          name={meal.name}
          intro={meal.intro}
          price={meal.price}
        ></MealItem>
      ))}
    </ul>
  );
};

export default Meals;
