export const cartItems = [];

export const addToCart = (snack) => {
  cartItems.push(snack);
};

export const removeFromCart = (snack) => {
  const index = cartItems.findIndex((item) => item.id === snack.id);
  cartItems.splice(index, 1);
};
