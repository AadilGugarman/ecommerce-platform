import { Link } from "react-router-dom";

const HeaderBrand = () => {
  return (
    <Link to="/">
      <img src="./logo.jpg" alt="logo" className="w-16" />
    </Link>
  );
};

export default HeaderBrand;
