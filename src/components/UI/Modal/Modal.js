import styles from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const Modal = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

export { Modal, BackDrop };
