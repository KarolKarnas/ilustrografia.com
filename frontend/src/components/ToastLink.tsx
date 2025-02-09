import { Link } from "react-router-dom";

type ToastLinkProps = {
  product: string;
  qty?: number;
};

const ToastLink = ({ product, qty }: ToastLinkProps) => {
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
