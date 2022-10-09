import { useLoaderData } from "react-router-dom";
import Cart from "../components/Cart";
import Product from "../components/Product";

interface TshirtData {
  _id: string;
  index: number;
  price: number;
  picture: string;
  name: string;
}

const Home = () => {
  const data = useLoaderData() as TshirtData[];
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-10 component mx-auto mt-10">
      <div className="grid grid-cols-3 col-span-3 gap-5">
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="col-span-1">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
