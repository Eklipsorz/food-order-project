import { useReducer } from 'react';
import CartContext from './cart-context';

const initCart = {
  items: [],
  totalAmount: 0,
};

const AddItemToCart = (prevState, payload) => {
  const { items: currentItems } = prevState;

  const updatedTotalAmount =
    prevState.totalAmount + payload.item.price * payload.item.amount;

  const existingItemIndex = currentItems.findIndex(
    (item) => item.id === payload.item.id,
  );

  const existingItem = currentItems[existingItemIndex];
  let updatedItems;
  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      amount: existingItem.amount + payload.item.amount,
    };
    updatedItems = [...currentItems];
    updatedItems[existingItemIndex] = updatedItem;
  } else {
    updatedItems = currentItems.concat(payload.item);
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const cartReducer = (prevState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM': {
      const newState = AddItemToCart(prevState, payload);
      return newState;
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
