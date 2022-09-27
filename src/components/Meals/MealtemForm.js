import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MainItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label='Amount'
        attr={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MainItemForm;
