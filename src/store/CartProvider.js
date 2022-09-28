import { useReducer } from 'react';
import CartContext from './cart-context';

const initCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  let { type, payload } = action;
  console.log('action', type, payload);
  switch (type) {
    case 'ADD_ITEM': {
      const updatedItems = prevState.items.concat(payload.item);
      console.log('after action', updatedItems);
      const updatedTotalAmount =
        prevState.totalAmount + payload.item.price * payload.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM':
      break;
    default:
      return new Error();
  }
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initCart);

  const addItemToCartHandler = (item) => {
    cartDispatch({ type: 'ADD_ITEM', payload: { item } });
  };
  const removeItemFromCartHandler = (id) => {
    cartDispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
