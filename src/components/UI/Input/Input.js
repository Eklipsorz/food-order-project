import styles from './Input.module.css';

const Input = (props) => {
  const { type, id } = props.attr;
  let NewInput = '';
  switch (type) {
    case 'number': {
      const { min, max, step, defaultValue } = props.attr;
      NewInput = (
        <input
          id={`input-${id}`}
          type={type}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
        />
      );
      break;
    }
    default: {
      NewInput = <input type={type} id={`input-${id}`} />;
      break;
    }
  }

  return (
    <div className={styles.input}>
      <label htmlFor={`input-${id}`}>{props.label}</label>
      {NewInput}
    </div>
  );
};

export default Input;
