interface ProductProps {
  product: {
    _id: string;
    index: number;
    price: number;
    picture: string;
    name: string;
  };
}

const Product = (props: ProductProps) => {
  const { _id, name, picture, price } = props.product;
  return (
    <div className="border rounded relative">
      <div className="p-3">
        <img src={picture} alt="" className="w-full h-[300px]" />
        <div className="mt-5 font-semibold">{name}</div>
        <div className="mb-10">Price: {price}$</div>
      </div>
      <button className="bg-amber-300 w-full py-1 absolute bottom-0 rounded font-semibold hover:bg-amber-400">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
