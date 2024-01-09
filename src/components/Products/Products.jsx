const Products = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, price, description } = props.product;

  // eslint-disable-next-line react/prop-types
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="border-2 p-8 mx-4">
      <img className="max-h-40" src={image} alt="" />
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="font-bold">${price}</p>
      <p>{description}</p>
      <button
        // eslint-disable-next-line react/prop-types
        onClick={() => handleAddToCart(props.product)}
        className="btn btn-primary hover:bg-red-400 active:bg-red-700 border-0"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
