import HeaderTopBar from "./HeaderTopBar";
import HeaderBrand from "./HeaderBrand";
import HeaderActions from "./HeaderActions";
import Navbar from "./Navbar";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-gray-100 border-b-2 border-gray-300">
      <HeaderTopBar />

      <div className="container flex items-center justify-between pb-2 border-b-2 border-gray-200 md:border-none">
        <div className="flex items-center gap-4">
          <HeaderBrand />
          <Navbar />
        </div>

        <HeaderActions />
      </div>

      <Search />
    </header>
  );
};

export default Header;
