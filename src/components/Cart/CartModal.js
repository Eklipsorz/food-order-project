import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import { Modal, BackDrop } from '../UI/Modal/Modal';

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onHideCart} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <Modal>
          <Cart onHideCart={props.onHideCart} />
        </Modal>,
        document.getElementById('modal-root'),
      )}
    </React.Fragment>
  );
};

export default CartModal;
