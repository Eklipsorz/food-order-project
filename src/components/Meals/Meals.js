import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import MealItem from './MealItem';
import styles from './Meals.module.css';

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const { error, isLoading, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const options = {
      url: 'https://react-test-http-d24a5-default-rtdb.asia-southeast1.firebasedatabase.app/mealFEs.json',
    };

    const handler = (data) => {
      const transformedMeals = [];

      for (let key in data) {
        transformedMeals.push({
          id: key,
          name: data[key].name,
          intro: data[key].intro,
          price: data[key].price,
        });
      }
      setMeals(transformedMeals);
    };

    fetchData(options, handler);
  }, [fetchData]);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

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
