export const cartItems = [];

export const addToCart = (snack) => {
  cartItems.push(snack);
};

export const removeFromCart = (snack) => {
  const index = cartItems.findIndex((item) => item.id === snack.id);
  cartItems.splice(index, 1);
};

export const calculateTotalPrice = () => {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
};

export const clearCart = () => {
  cartItems.splice(0, cartItems.length);
  console.log(cartItems);
};
