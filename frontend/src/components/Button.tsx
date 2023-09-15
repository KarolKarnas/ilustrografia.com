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
        className={` w-42 text-2xs flex items-center gap-3 rounded-sm border px-6 py-3 font-semibold uppercase  tracking-widest transition-colors duration-300  md:px-8  ${
          color === "red"
            ? " border-red-600 bg-red-400 text-red-50 hover:bg-red-400 bg-opacity-60   hover:bg-opacity-80  "
            : color === "white"
            ? "border-white bg-red-50 text-white hover:bg-red-200  bg-opacity-30 drop-shadow-2xl hover:bg-opacity-50"
            : ""
        }  `}
      >
        {text} <FaAngleDoubleRight />
      </button>
    </Link>
  );
};
export default Button;
