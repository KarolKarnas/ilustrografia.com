import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { FaBasketShopping, FaTrash } from "react-icons/fa6";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import { VariationCart } from "../../types/Product";
import PageHeading from "../../components/primitives/PageHeading";
import CartSelectNumber from "./CartSelectNumber";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import IconDivider from "../../components/primitives/IconDivider";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  const totalItems = cartItems.reduce((acc, variant) => acc + variant.qty, 0);
  const totalPrice = cartItems
    .reduce((acc, variant) => acc + variant.qty * variant.price, 0)
    .toFixed(2);

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  const addToCartHandler = async (variation: VariationCart, qty: number) => {
    dispatch(addToCart({ ...variation, qty }));
  };
  const removeFromCartHandler = async (id: string) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div
        className="bg-angel-dust dark:bg-angel-dark-dust relative
       mb-8 flex h-48 w-11/12 flex-col items-center justify-center rounded-3xl shadow-hero sm:bg-inherit md:mb-28 md:h-[330px] "
      >
        <img
          src="/images/shop/baba-cart.jpg "
          alt=""
          className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
        />

        <div className="absolute flex flex-col items-center justify-center">
          <HeadingAccent>· Ilustrografia ·</HeadingAccent>
          <PageHeading>Shopping Cart</PageHeading>
          <IconDivider>
            <FaBasketShopping className="text-2xl" />
          </IconDivider>
        </div>
      </div>

      {/* <PageHeading>Shopping Cart</PageHeading> */}

      {cartItems.length === 0 ? (
        <div>
          Your cart is empty{" "}
          <Link to="/">
            <button className="my-2 bg-zinc-900 px-32 py-1 text-white  hover:bg-red-200">
              Go Back
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-11/12 md:w-8/12 text-2xs md:text-sm">
          <div className=" mb-10 flex items-center justify-between rounded-lg bg-white py-3 font-montserrat  font-semibold text-black-magic shadow-md dark:bg-black-magic dark:text-ivory">
            <div className="basis-1/12  flex justify-center "><FaTrash /></div>
            <div className="w-10 basis-1/12 text-center ">Image</div>
            <div className="basis-6/12 text-center ">Link</div>
            <div className="basis-2/12 ">Price</div>
            <div className="basis-2/12 ">Qty</div>
            <div className="basis-2/12 ">Total</div>
          </div>
          {/* <hr className=" mx-auto my-3 h-px"></hr> */}

          {cartItems.map((variation, index) => (
            <div key={variation._id}>
              <div className="mb-4 flex items-center justify-between dark:text-ivory">
                <FaTrash
                  onClick={() => removeFromCartHandler(variation._id)}
                  className="basis-1/12 hover:cursor-pointer hover:text-red-magic"
                />
                <img
                  className="w-10 basis-1/12"
                  src={variation.image}
                  alt={variation.variationName}
                />
                <Link
                  className="basis-6/12 text-center underline hover:text-red-magic"
                  to={variation.pathnameWithQuery}
                >
                  {" "}
                  <div>{variation.variationName}</div>{" "}
                </Link>
                <div className="basis-2/12">${variation.price}</div>
                <div className="basis-2/12">
                  <CartSelectNumber
                    selectNumber={variation.countInStock}
                    onChange={addToCartHandler}
                    variation={variation}
                    defaultValue={variation.qty.toString()}
                  />
                </div>
                <div className="basis-2/12">
                  ${variation.price * variation.qty}
                </div>
              </div>
              {cartItems.length - 1 > index ? (
                <hr className=" mx-auto my-3 h-px"></hr>
              ) : null}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row md:gap-20 w-11/12 md:w-auto">
        <div className=" basis-1/2 mx-auto">
          <img
            className=" dark:invert-90"
            src="/images/shop/baba-checkout.png"
            alt=""
          />
        </div>
        <div className="basis-1/2 md:mt-20">
          <h2 className="mb-8 font-cormorant-infant text-4xl font-semibold italic text-eerie-black  drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl text-center md:text-left mt-8 md:mt-0">
            Cart summary
          </h2>

          <div className="mb-12 w-full font-montserrat text-black-magic dark:text-ivory">
            <p className="flex items-end justify-between">
              <span className="mr-2 text-xs  uppercase">Total quantity:</span>
              <span className=" text-2xl font-light">
                {totalItems} {totalItems === 1 ? "pc" : "pcs"}
              </span>
            </p>
            <hr className=" mx-auto my-3 h-px"></hr>

            <p className="flex items-end justify-between">
              <span className="mr-2 text-xs  uppercase">Total price:</span>
              <span className=" text-2xl">${totalPrice}</span>
            </p>
            <hr className=" mx-auto my-3 h-px"></hr>
          </div>

          <button
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
            className={`${
              cartItems.length === 0
                ? "bg-zinc-100 text-zinc-300"
                : "border border-black-magic bg-black-magic   text-ivory hover:border-red-magic hover:bg-red-magic dark:border-red-magic dark:bg-red-magic/60 dark:hover:bg-red-magic/80"
            }  h-10  w-full text-xs font-semibold uppercase transition-colors duration-300 md:w-full md:px-32`}
          >
            {cartItems.length === 0
              ? "Your cart is empty"
              : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
