import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useCreateOrderMutation } from "../../slices/ordersApiSlice";
import { clearCartItems } from "../../slices/cartSlice";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import { FaCoins } from "react-icons/fa6";
import MainStrongText from "../../components/primitives/MainStrongText";
import Button from "../../components/Button";
import ProductsGrid from "../../components/ProductsGrid";
import { useGetProductsByCategoryQuery } from "../../slices/productsApiSlice";
import Spinner from "../../components/Spinner";
import Meta from "../../components/Meta";

const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);

  const {
    data: products,
    isLoading: isLoadingSlavic,
    error: errorSlavic,
  } = useGetProductsByCategoryQuery("neo-slavic-census");

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  useEffect(() => {
    if (!cart.shippingAddress?.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress?.address, navigate]);

  return (
    <>
      <Meta title="Place Order · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
       h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-28 md:h-[330px] "
        >
          <img
            src="/images/shop/my-precious-printings.jpg "
            alt=""
            className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
          />

          <div className="absolute flex flex-col items-center justify-center">
            <HeadingAccent>· Ilustrografia ·</HeadingAccent>
            <PageHeading>Place Order</PageHeading>
            <IconDivider>
              <FaCoins className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>
        <CheckoutSteps step1={true} step2={true} step3={true} step4={true} />

        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 md:flex-row md:items-start">
          <div className="w-full  md:w-7/12">
            <MainStrongText>Shipping Address</MainStrongText>

            <p className="mt-2 flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
              <span className="mr-2 text-2xs uppercase  md:text-xs">
                Address:
              </span>
              <span className="font-semibold">
                {cart.shippingAddress?.address}, {cart.shippingAddress?.city}{" "}
                {cart.shippingAddress?.postalCode},{" "}
                {cart.shippingAddress?.country}
              </span>
            </p>

            <hr className=" mx-auto my-3 h-px"></hr>
            <MainStrongText>Payment Method</MainStrongText>

            <p className="mt-2 flex items-center gap-3 font-montserrat text-black-magic dark:text-ivory">
              <span className="mr-2 text-2xs uppercase  md:text-xs">
                Method:
              </span>
              <span className="font-semibold">{cart.paymentMethod}</span>
            </p>
            <hr className=" mx-auto my-3 h-px"></hr>

            <MainStrongText>Order Items</MainStrongText>

            <div className="py-2">
              {cart.cartItems.length === 0 ? (
                <div className="flex w-full flex-col items-center justify-center gap-2">
                  <MainStrongText>Your cart is empty</MainStrongText>
                  <Link to="/">
                    <Button
                      text="Go back to Shop"
                      link="/shop"
                      color="red"
                    ></Button>
                  </Link>

                  <div className="mt-4 flex w-full flex-col items-center gap-4">
                    <MainStrongText>Or get one of those:</MainStrongText>
                    <ProductsGrid
                      products={products}
                      hideVariations={false}
                      isLoading={isLoading}
                      error={error}
                      colNum={4}
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full text-2xs md:text-base">
                  <div className=" mb-10 flex items-center justify-between rounded-lg bg-white py-3 font-montserrat  font-semibold text-black-magic shadow-md dark:bg-black-magic dark:text-ivory">
                    <div className="basis-2/12 text-center ">Image</div>
                    <div className="basis-6/12 text-center ">Link</div>
                    <div className="basis-2/12 text-center ">Total</div>
                  </div>

                  {cart.cartItems.map((variation, index) => (
                    <div key={index}>
                      <div className="mb-4 flex items-center justify-between dark:text-ivory">
                        <img
                          className="ml-2 w-10 basis-2/12"
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

                        <div className="basis-2/12">
                          {variation.qty} x ${variation.price} = $
                          {variation.price * variation.qty}
                        </div>
                      </div>
                      {cart.cartItems.length - 1 > index ? (
                        <hr className=" mx-auto my-3 h-px"></hr>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="fixed bottom-0 z-10 flex w-screen flex-col bg-white px-4 pb-4 pt-1 shadow-hero dark:bg-angel-dark-dust md:sticky md:top-8 md:h-full md:w-3/12 md:rounded-lg md:p-8">
            <h2 className="text-center font-cormorant-infant  font-semibold italic text-eerie-black drop-shadow-red-heading  dark:text-ivory dark:drop-shadow-xl md:mb-8 md:mt-0 md:text-4xl">
              Order Summary
            </h2>

            <div className="mb-2 w-full font-montserrat text-black-magic dark:text-ivory md:mb-12">
              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Items:
                </span>
                <span className="  font-light">${cart.itemsPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Shipping:
                </span>
                <span className="  font-light">${cart.shippingPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Tax:
                </span>
                <span className="  font-light">${cart.taxPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase   md:text-xs">
                  Total:
                </span>
                <span className=" text-lg">${cart.totalPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>
            </div>

            {error && <div>{getError(error as ApiError)}</div>}

            <button
              disabled={cart.cartItems.length === 0}
              onClick={placeOrderHandler}
              className={`${
                cart.cartItems.length === 0
                  ? "bg-zinc-100 text-zinc-300"
                  : "border border-red-magic bg-red-magic/60   text-ivory  hover:bg-red-magic/80  "
              }  h-6 w-full  text-2xs font-semibold uppercase transition-colors duration-300 md:h-10 md:w-full md:text-xs `}
            >
              {cart.cartItems.length === 0
                ? "Your cart is empty"
                : "Place Order"}
            </button>

            {cart.cartItems.length >= 2 ? (
              <div className="  mx-auto">
                <img
                  className="hidden w-[300px] dark:invert-90 md:block"
                  src="/images/shop/baba-checkout.png"
                  alt=""
                />
              </div>
            ) : null}
          </div>

          {isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
};
export default PlaceOrderPage;
