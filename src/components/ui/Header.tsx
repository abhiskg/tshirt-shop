import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" bg-amber-300 h-14">
      <nav className="flex justify-between mx-10 items-center h-full">
        <div className="text-lg font-semibold">TSHIRT</div>
        <ul className="flex gap-5 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
