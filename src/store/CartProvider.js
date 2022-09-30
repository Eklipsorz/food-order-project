import { useReducer } from 'react';
import CartContext from './cart-context';

const initCart = {
  items: [],
  totalAmount: 0,
};

const addItemToCart = (prevState, payload) => {};

const removeItemFromCart = (prevState, payload) => {
  const { items: currentItems } = prevState;

  const existingItemIndex = currentItems.findIndex(
    (item) => item.id === payload.id,
  );
  const existingItem = currentItems[existingItemIndex];

  let updatedItems;
  if (existingItem.amount === 1) {
    updatedItems = currentItems.filter((item) => item.id !== payload.id);
  } else if (existingItem.amount > 1) {
    const updatedItem = {
      ...existingItem,
      amount: existingItem.amount - 1,
    };
    updatedItems = [...currentItems];
    updatedItems[existingItemIndex] = updatedItem;
  }

  const updatedTotalAmount = prevState.totalAmount - existingItem.price;

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

const cartReducer = (prevState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_ITEM': {
      const newState = addItemToCart(prevState, payload);
      return newState;
    }
    case 'REMOVE_ITEM': {
      const newState = removeItemFromCart(prevState, payload);
      return newState;
    }
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
