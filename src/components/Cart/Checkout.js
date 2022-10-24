import styles from './Checkout.module.css';
const Checkout = (props) => {
  return (
    <form>
      <div className={styles['form-control']}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='postal-code'>Postal Code</label>
        <input type='text' id='postal-code' />
      </div>
      <div className={styles['form-control']}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </div>
      <div className={styles['form-action']}>
        <button type='button' onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirom</button>
      </div>
    </form>
  );
};

export default Checkout;
