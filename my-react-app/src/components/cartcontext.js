import React, { createContext, useContext, useReducer } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};


const initialCartState = {
  items: [],
};


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  
  const removeFromCart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Función de utilidad para acceder al contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};