import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import { Modal, BackDrop } from '../UI/Modal/Modal';

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal onClick={props.onClick}>
          <Cart />
        </Modal>,
        document.getElementById('modal-root'),
      )}
    </React.Fragment>
  );
};

export default CartModal;
