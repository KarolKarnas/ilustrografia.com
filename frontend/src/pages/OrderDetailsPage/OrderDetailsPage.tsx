// import { useAppSelector } from '../../slices/reduxHooks';
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
  SCRIPT_LOADING_STATE,
} from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useDeliverOrderMutation,
} from "../../slices/ordersApiSlice";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import Message from "../../components/Message";
import { useEffect } from "react";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import { FaListUl } from "react-icons/fa";
import MainStrongText from "../../components/primitives/MainStrongText";
import Button from "../../components/Button";
import Meta from "../../components/Meta";

const OrderDetailsPage = () => {
  const { id: orderId } = useParams();

  if (!orderId) {
    return <div>No orderId provided</div>;
  }

  const {
    data: order,
    refetch,
    error,
    isLoading,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery({});

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            clientId: paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({
          type: "setLoadingStatus",
          value: SCRIPT_LOADING_STATE.PENDING,
        });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  const handleDelivered = async () => {
    try {
      if (order) {
        await deliverOrder(order?._id);
        refetch();
        toast.success("Order is Delivered!");
      }
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  const paypalButtonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },

    createOrder(data, actions) {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: { value: order!.totalPrice.toString() },
            },
          ],
        })
        .then((orderID: string) => {
          return orderID;
        });
    },
    onApprove(data, actions) {
      return actions.order!.capture().then(async function (details) {
        try {
          await payOrder({ orderId, details });
          refetch();
          toast.success("Order is paid");
        } catch (err) {
          toast.error(getError(err as ApiError));
        }
      });
    },
    onError(err) {
      toast.error(getError(err as ApiError));
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>{getError(error as ApiError)}</div>;
  }
  if (!order) {
    return <div>No Order</div>;
  }

  return (
    <>
      <Meta title="Order Details · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
     h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-28 md:h-[330px] "
        >
          <img
            src="/images/shop/printings-images.jpg "
            alt=""
            className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
          />

          <div className="absolute flex flex-col items-center justify-center">
            <HeadingAccent>· Ilustrografia ·</HeadingAccent>
            <PageHeading>Order Details</PageHeading>
            <IconDivider>
              <FaListUl className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>

        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 md:flex-row md:items-start">
          {/* col 1 */}
          <div className="w-full  md:w-7/12">
            <div className="mb-8">
              <MainStrongText>Order Number</MainStrongText>

              <p className="mt-2 flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Number:
                </span>
                <span className="font-light">{order._id}</span>
              </p>
              <hr className=" mx-auto my-3 h-px"></hr>
            </div>

            <div className="mb-8">
              <MainStrongText>Shipping Address</MainStrongText>
              <p className="mt-2 flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Name:
                </span>
                <span className="font-light">{order.user.name}</span>
              </p>
              <hr className=" mx-auto my-3 h-px"></hr>
              <p className="mt-2 flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Email:
                </span>
                <a
                  className="text-red-magic hover:text-eerie-black"
                  href={`mailto:${order.user.email}`}
                >
                  {order.user.email}
                </a>
              </p>
              <hr className=" mx-auto my-3 h-px"></hr>
              <p className=" mt-2 flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Address:
                </span>
                <span className="font-light">
                  {order.shippingAddress?.address},{" "}
                  {order.shippingAddress?.city}{" "}
                  {order.shippingAddress?.postalCode},{" "}
                  {order.shippingAddress?.country}
                </span>
              </p>
              <hr className=" mx-auto my-3 h-px"></hr>
              <Message
                variant={order.isDelivered ? "good" : "bad"}
                message={
                  order.isDelivered
                    ? "Your order has been delivered"
                    : "Have not been delivered yet"
                }
              />
            </div>

            <div className="mb-8">
              <MainStrongText>Payment Method</MainStrongText>
              <p className="mt-2flex items-center  gap-3 font-montserrat text-black-magic dark:text-ivory">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Method:
                </span>
                <span className="font-light">{order.paymentMethod}</span>
              </p>
              <hr className=" mx-auto my-3 h-px"></hr>
              <Message
                variant={order.isPaid ? "good" : "bad"}
                message={
                  order.isPaid
                    ? "Your order has been paid"
                    : "Have not been paid yet"
                }
              />
            </div>

            <MainStrongText>Order Items</MainStrongText>
            <div className="py-2">
              <div className="w-full text-2xs md:text-base">
                <div className=" mb-10 flex items-center justify-between rounded-lg bg-white py-3 font-montserrat  font-semibold text-black-magic shadow-md dark:bg-black-magic dark:text-ivory">
                  <div className="basis-2/12 text-center ">Image</div>
                  <div className="basis-6/12 text-center ">Link</div>
                  <div className="basis-2/12 text-center ">Total</div>
                </div>

                {order.orderItems.map((variation, index) => (
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
                    {order.orderItems.length - 1 > index ? (
                      <hr className=" mx-auto my-3 h-px"></hr>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* col 2  */}

          <div className="fixed bottom-0 z-10 flex w-screen flex-col bg-white px-4 pb-4 pt-1 shadow-hero dark:bg-angel-dark-dust md:sticky md:top-8 md:h-full md:w-3/12 md:rounded-lg md:p-8">
            <h2 className="text-center font-cormorant-infant  font-semibold italic text-eerie-black drop-shadow-red-heading  dark:text-ivory dark:drop-shadow-xl md:mb-8 md:mt-0 md:text-4xl">
              Order Summary
            </h2>

            <div className="mb-2 w-full font-montserrat text-black-magic dark:text-ivory md:mb-12">
              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Items:
                </span>
                <span className="  font-light">${order.itemsPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Shipping:
                </span>
                <span className="  font-light">${order.shippingPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase  md:text-xs">
                  Tax:
                </span>
                <span className="  font-light">${order.taxPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>

              <p className="flex items-center justify-between">
                <span className="mr-2 text-2xs uppercase   md:text-xs">
                  Total:
                </span>
                <span className=" text-lg">${order.totalPrice}</span>
              </p>
              <hr className=" mx-auto my-0.5 h-px opacity-10 md:my-3 md:opacity-100"></hr>
            </div>

            {!order.isPaid && (
              <div>
                {loadingPay && <div>Loading...</div>}
                {isPending ? (
                  <div>Loading...</div>
                ) : (
                  <div>
                    <div>
                      <PayPalButtons
                        {...paypalButtonTransactionProps}
                      ></PayPalButtons>
                    </div>
                  </div>
                )}
              </div>
            )}
            {loadingDeliver && <div>Loading...</div>}
            {order.isPaid && !order.isDelivered ? (
              <button
                className="h-6 w-full border   border-red-magic  bg-red-magic/60  text-2xs font-semibold  uppercase text-ivory transition-colors duration-300 hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs"
                onClick={handleDelivered}
              >
                Mark as Delivered
              </button>
            ) : null}

            {order.orderItems.length >= 2 ? (
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
      </div>
    </>
  );
};

export default OrderDetailsPage;
