import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MainItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input type='number' label='Amount' />
      <button>+ Add</button>
    </form>
  );
};

export default MainItemForm;
