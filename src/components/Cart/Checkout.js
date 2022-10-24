import styles from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const isNotEmpty = (field) => field !== '';
const isValidCode = (code) => code.length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    changeHandler: enteredNameChangeHandler,
    blurInputHandler: enteredNameBlurInputHandler,
    reset: enteredNameReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: enteredStreetHasError,
    changeHandler: enteredStreetChangeHandler,
    blurInputHandler: enteredStreetBlurInputHandler,
    reset: enteredStreetReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: enteredPostalCodeHasError,
    changeHandler: enteredPostalCodeChangeHandler,
    blurInputHandler: enteredPostalCodeBlurInputHandler,
    reset: enteredPostalCodeReset,
  } = useInput(isValidCode);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityHasError,
    changeHandler: enteredCityChangeHandler,
    blurInputHandler: enteredCityBlurInputHandler,
    reset: enteredCityReset,
  } = useInput(isNotEmpty);

  const confirmHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!formIsValid) return;
    console.log(
      'submit',
      enteredName,
      enteredStreet,
      enteredPostalCode,
      enteredCity,
    );
    enteredNameReset();
    enteredStreetReset();
    enteredPostalCodeReset();
    enteredCityReset();
  };

  const formIsValid =
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid;

  const nameClasses = enteredNameHasError
    ? `${styles['control']} ${styles['invalid']}`
    : `${styles['control']}`;

  const streetClasses = enteredStreetHasError
    ? `${styles['control']} ${styles['invalid']}`
    : `${styles['control']}`;

  const postalCodeClasses = enteredPostalCodeHasError
    ? `${styles['control']} ${styles['invalid']}`
    : `${styles['control']}`;

  const cityClasses = enteredCityHasError
    ? `${styles['control']} ${styles['invalid']}`
    : `${styles['control']}`;

  return (
    <form className={styles['form']} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={enteredNameChangeHandler}
          onBlur={enteredNameBlurInputHandler}
        />
        {enteredNameHasError && <p>Please input a valid name!!</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          value={enteredStreet}
          onChange={enteredStreetChangeHandler}
          onBlur={enteredStreetBlurInputHandler}
        />
        {enteredStreetHasError && <p>Please input a valid street!!</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor='postal-code'>Postal Code</label>
        <input
          type='text'
          id='postal-code'
          value={enteredPostalCode}
          onChange={enteredPostalCodeChangeHandler}
          onBlur={enteredPostalCodeBlurInputHandler}
        />
        {enteredPostalCodeHasError && <p>Please input a valid postal code!!</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          value={enteredCity}
          onChange={enteredCityChangeHandler}
          onBlur={enteredCityBlurInputHandler}
        />
        {enteredCityHasError && <p>Please input a valid city!!</p>}
      </div>
      <div className={styles['actions']}>
        <button type='button' onClick={props.onClose}>
          Cancel
        </button>
        <button className={styles.submit}>Confirom</button>
      </div>
    </form>
  );
};

export default Checkout;
