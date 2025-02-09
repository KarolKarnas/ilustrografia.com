import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { FaBasketShopping, FaTrash } from "react-icons/fa6";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import { VariationCart } from "../../types/Product";
import PageHeading from "../../components/primitives/PageHeading";
import CartSelectNumber from "./CartSelectNumber";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import IconDivider from "../../components/primitives/IconDivider";
import { useGetProductsByCategoryQuery } from "../../slices/productsApiSlice";
import MainStrongText from "../../components/primitives/MainStrongText";
import ProductsGrid from "../../components/ProductsGrid";
import Button from "../../components/Button";
import Meta from "../../components/Meta";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const totalItems = cartItems.reduce((acc, variant) => acc + variant.qty, 0);
  const totalPrice = cartItems
    .reduce((acc, variant) => acc + variant.qty * variant.price, 0)
    .toFixed(2);

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery("neo-slavic-census");
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
    <>
      <Meta title="Cart · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
       h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-28 md:h-[330px] "
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
              <FaBasketShopping className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <MainStrongText>Your cart is empty</MainStrongText>
            <Link to="/">
              <Button text="Go back to Shop" link="/shop" color="red"></Button>
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
          <div className="flex w-full flex-col-reverse items-center gap-10 md:flex-row md:items-start">
            <div className="w-full text-2xs md:text-sm">
              <div className=" mb-10 flex items-center justify-between rounded-lg bg-white py-3 font-montserrat  font-semibold text-black-magic shadow-md dark:bg-black-magic dark:text-ivory">
                <div className="flex  basis-1/12 justify-center ">
                  <FaTrash />
                </div>
                <div className="w-10 basis-1/12 text-center ">Image</div>
                <div className="basis-6/12 text-center ">Link</div>
                <div className="basis-2/12 ">Price</div>
                <div className="basis-2/12 text-center sm:text-left">Qty</div>
                <div className="basis-2/12 ">Total</div>
              </div>
              {cartItems.map((variation, index) => (
                <div key={variation._id} data-testid="cart-product">
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
              <div className="mt-20 flex w-full flex-col items-center gap-4">
                <MainStrongText>Clients also liked:</MainStrongText>
                <ProductsGrid
                  products={products}
                  hideVariations={false}
                  isLoading={isLoading}
                  error={error}
                  colNum={4}
                />
              </div>
            </div>
            <div className="fixed bottom-0 z-10 flex w-screen flex-col bg-white px-4 pb-4 pt-1 shadow-hero dark:bg-angel-dark-dust md:sticky md:top-8 md:h-full md:w-3/12 md:rounded-lg md:p-8">
              <div className="">
                <h2 className=" text-center font-cormorant-infant  font-semibold italic text-eerie-black drop-shadow-red-heading  dark:text-ivory dark:drop-shadow-xl md:mb-8 md:mt-0 md:text-4xl">
                  Cart Summary
                </h2>

                <div className="mb-2 w-full font-montserrat text-black-magic dark:text-ivory md:mb-12">
                  <p className="flex items-center justify-between">
                    <span className="mr-2 text-2xs uppercase  md:text-xs">
                      Total quantity:
                    </span>
                    <span className="font-light">
                      {totalItems} {totalItems === 1 ? "pc" : "pcs"}
                    </span>
                  </p>
                  <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>
                  <p className="flex items-center justify-between">
                    <span className="mr-2 text-2xs uppercase   md:text-xs">
                      Total price:
                    </span>
                    <span className=" text-lg" data-testid="cart-total-price">
                      ${totalPrice}
                    </span>
                  </p>
                  <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>
                </div>
                <button
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  className={`${
                    cartItems.length === 0
                      ? "bg-zinc-100 text-zinc-300"
                      : "border border-red-magic bg-red-magic/60   text-ivory  hover:bg-red-magic/80  "
                  }  h-6 w-full  text-2xs font-semibold uppercase transition-colors duration-300 md:h-10 md:w-full md:text-xs `}
                >
                  {cartItems.length === 0
                    ? "Your cart is empty"
                    : "Proceed to Checkout"}
                </button>
              </div>
              {cartItems.length >= 2 ? (
                <div className="  mx-auto">
                  <img
                    className="hidden w-[300px] dark:invert-90 md:block"
                    src="/images/shop/baba-checkout.png"
                    alt=""
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartPage;
