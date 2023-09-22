import { Link } from "react-router-dom"
import logo from "./assets/logo-ilustrografia.png";

type Props = {
  mobile: boolean
}

const MainLinks = ({mobile} : Props) => {
  return (
    <>
     <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/illustrations"
          >
            Illustrations
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/projects"
          >
            Projects
          </Link>
          <Link to="/" className={ mobile ? 'hidden' : ''}>
            <img
              className="h-20 duration-300 hover:-translate-y-1 hover:scale-105 dark:invert"
              src={logo}
              alt="logo-ilustrografia"
            />
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/about-us"
          >
            About
          </Link>
          <Link
            className="hover:border-black dark:hover:border-ivory hover:border-b"
            to="/contact"
          >
            Contact
          </Link>

    </>
  )
}
export default MainLinks