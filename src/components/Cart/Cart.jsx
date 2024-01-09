// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  // eslint-disable-next-line react/prop-types
  console.log(cart);
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="bg-red-500 p-20">
      <h1 className="text-2xl font-bold">Orders</h1>
      <h1 className="text-2xl">Selected Items: {cart.length}</h1>
      <p className="text-2xl">Total Price:$ {total}</p>
    </div>
  );
};

export default Cart;
