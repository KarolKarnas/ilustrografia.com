import { Link } from "react-router-dom";

interface Props {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
}

const CheckoutSteps = ({ step1, step2, step3, step4 }: Props) => {
  return (
    <div className=" flex w-11/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 justify-between font-montserrat text-sm font-semibold mb-4 ">
      {step1 ? (
        <Link to={"/login"} className="text-red-magic">
          Login
        </Link>
      ) : (
        <div className="text-zinc-300 dark:text-zinc-600 hover:cursor-not-allowed">Login</div>
      )}
      {step2 ? (
        <Link to={"/shipping"} className="text-red-magic">
          Shipping
        </Link>
      ) : (
        <div className="text-zinc-300 dark:text-zinc-600 hover:cursor-not-allowed">Shipping</div>
      )}
      {step3 ? (
        <Link to={"/payment"} className="text-red-magic">
          Payment
        </Link>
      ) : (
        <div className="text-zinc-300 dark:text-zinc-600 hover:cursor-not-allowed">Payment</div>
      )}
      {step4 ? (
        <Link to={"/place-order"} className="text-red-magic">
          Place Order
        </Link>
      ) : (
        <div className="text-zinc-300 dark:text-zinc-600 hover:cursor-not-allowed">Place Order</div>
      )}
    </div>
  );
};
export default CheckoutSteps;
