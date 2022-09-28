import { forwardRef } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = forwardRef((props, ref) => {

  return (
    <div className={styles.input}>
      <label htmlFor={props.attr.id}>{props.label}</label>
      <input {...props.attr} ref={ref} />
    </div>
  );
});

export default NumberInput;
