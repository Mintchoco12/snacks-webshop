export const cartItems = [];

export const addToCart = (snack) => {
  cartItems.push(snack);
  console.log(cartItems);
};

export const removeFromCart = (snack) => {
  const index = cartItems.findIndex((item) => item.id === snack.id);
  cartItems.splice(index, 1);
};
