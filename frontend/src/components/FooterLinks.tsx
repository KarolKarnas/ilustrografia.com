import { Link } from "react-router-dom";
import DropdownProjects from "./DropdownProjects";

const MainLinks = () => {
  return (
    <>
      <Link
        className="hover:text-red-magic border-red-magic  text-xs uppercase  hover:scale-110 hover:border-b-2 hover:transition hover:duration-500"
        to="/"
      >
        Home
      </Link>
      <Link
        className="hover:text-red-magic border-red-magic  text-xs uppercase  hover:scale-110 hover:border-b-2 hover:transition hover:duration-500"
        to="/illustrations"
      >
        Illustrations
      </Link>
        <DropdownProjects footer />
      <Link
        className="hover:text-red-magic border-red-magic  text-xs uppercase  hover:scale-110 hover:border-b-2 hover:transition hover:duration-500"
        to="/shop"
      >
        Shop
      </Link>
      <Link
        className="hover:text-red-magic border-red-magic  text-xs uppercase  hover:scale-110 hover:border-b-2 hover:transition hover:duration-500"
        to="/about"
      >
        About
      </Link>
      <Link
        className="hover:text-red-magic border-red-magic  text-xs uppercase  hover:scale-110 hover:border-b-2 hover:transition hover:duration-500"
        to="/contact"
      >
        Contact
      </Link>
    </>
  );
};
export default MainLinks;
