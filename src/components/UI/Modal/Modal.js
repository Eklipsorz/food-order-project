import styles from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverLay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        document.getElementById('modal-root'),
      )}
    </React.Fragment>
  );
};

export default Modal;
