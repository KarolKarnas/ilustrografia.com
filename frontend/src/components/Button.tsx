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
        className={` w-42 flex items-center gap-3 border px-6 py-4 text-2xs font-semibold uppercase  tracking-widest transition-colors duration-300  md:px-8  ${
          color === "red"
            ? "rounded-sm  border-red-600 bg-red-magic bg-opacity-60 text-red-50 hover:bg-red-magic   hover:bg-opacity-80  "
            : color === "white"
            ? " rounded-sm border-ivory bg-ivory bg-opacity-10 text-ivory  drop-shadow-2xl hover:bg-ivory hover:bg-opacity-30"
            : color === "black"
            ? "border-black-magic bg-black-magic text-ivory drop-shadow-2xl  hover:border-red-magic hover:bg-red-magic hover:bg-opacity-70 "
            : ""
        }  `}
      >
        {text} <FaAngleDoubleRight />
      </button>
    </Link>
  );
};
export default Button;
