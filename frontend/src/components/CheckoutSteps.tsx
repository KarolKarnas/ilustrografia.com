import { Link } from "react-router-dom";

interface Props {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
}

const CheckoutSteps = ({ step1, step2, step3, step4 }: Props) => {
  // console.log(step1);
  return (
    <div className="mt-5 flex w-2/12 justify-between">
      {step1 ? (
        <Link to={"/login"} className="text-red-magic">
          Login
        </Link>
      ) : (
        <div className="text-zinc-300 hover:cursor-default">Shipping</div>
      )}
      {step2 ? (
        <Link to={"/shipping"} className="text-red-magic">
          Shipping
        </Link>
      ) : (
        <div className="text-zinc-300 hover:cursor-default">Shipping</div>
      )}
      {step3 ? (
        <Link to={"/payment"} className="text-red-magic">
          Payment
        </Link>
      ) : (
        <div className="text-zinc-300 hover:cursor-default">Payment</div>
      )}
      {step4 ? (
        <Link to={"/place-order"} className="text-red-magic">
          Place Order
        </Link>
      ) : (
        <div className="text-zinc-300 hover:cursor-default">Place Order</div>
      )}
    </div>
  );
};
export default CheckoutSteps;
