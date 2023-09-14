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
        className={` rounded-sm w-42 flex items-center gap-3 border px-8 py-3 text-xs  font-semibold uppercase tracking-widest  transition-colors  duration-300 ${
          color === "red"
            ? " border-red-600 bg-red-400 bg-opacity-60 text-red-50 hover:bg-red-400   hover:bg-opacity-80  "
            : color === "white"
            ? "border-white bg-red-50 bg-opacity-30 text-white  drop-shadow-2xl hover:bg-red-200 hover:bg-opacity-50"
            : ""
        }  `}
      >
        {text} <FaAngleDoubleRight />
      </button>
    </Link>
  );
};
export default Button;
