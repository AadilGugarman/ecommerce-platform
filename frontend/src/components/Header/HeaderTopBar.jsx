import { Link } from "react-router-dom";

const HeaderTopBar = () => {
  return (
    <div className="container items-center justify-between hidden py-2 mx-auto text-sm border-b md:flex">
      <p>Get up to 50% off — limited time only!</p>
      <ul className="flex gap-4">
        <li>
          <Link to="/help-center">Help Center</Link>
        </li>
        <li>
          <Link to="/order-tracking">Order Tracking</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTopBar;
