import React from 'react';

const CartContext = React.createContext({
  items: [],
  fetchMusic: (url) => {}
});

export default CartContext;