import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  text: string;
  color: string;
  link: string;
};
const Button = ({ text, color, link }: Props) => {
  return (
    <Link to={link}>
      {" "}
      <button
        className={` w-42 flex items-center gap-3 rounded-sm border px-6 py-4 text-2xs font-semibold uppercase  tracking-widest transition-colors duration-300  md:px-8  ${
          color === "red"
            ? " bg-red-magic hover:bg-red-magic border-red-600 bg-opacity-60 text-red-50   hover:bg-opacity-80  "
            : color === "white"
            ? "border-white bg-white bg-opacity-10 text-white  drop-shadow-2xl hover:bg-white hover:bg-opacity-30"
            : ""
        }  `}
      >
        {text} <FaAngleDoubleRight />
      </button>
    </Link>
  );
};
export default Button;
