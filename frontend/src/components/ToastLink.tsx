import { Link } from "react-router-dom";

type Props = {
  product: string;
  qty?: number;
};

const ToastLink = ({ product, qty }: Props) => {
  return (
    <div>
      {product} {qty ? `x ${qty}` : null} added to{" "}
      <Link className="underline hover:text-red-500" to={"/cart"}>
        cart
      </Link>
    </div>
  );
};
export default ToastLink;
