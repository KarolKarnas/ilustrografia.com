import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { useNavigate } from "react-router-dom";

import { addPaymentMethod } from "../../slices/cartSlice";
import CheckoutSteps from "../../components/CheckoutSteps";
import PageHeading from "../../components/primitives/PageHeading";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import IconDivider from "../../components/primitives/IconDivider";
import { FaCoins } from "react-icons/fa6";
import Meta from "../../components/Meta";

const PaymentPage = () => {
  const { shippingAddress, paymentMethod: currentPaymentMethod } =
    useAppSelector((state) => state.cart);

  //set current payment
  const [paymentMethod, setPaymentMethod] = useState(
    currentPaymentMethod || "PayPal",
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //redirect if no shipping address
    if (shippingAddress && Object.keys(shippingAddress).length === 0) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addPaymentMethod(paymentMethod));
    navigate("/place-order");
  };

  return (
    <>
      <Meta title="Payment · Ilustrografia · Illustration · Digital Painting · Fantasy · Legends" />
      <div className="flex w-11/12 flex-col items-center justify-center">
        <div
          className="relative mb-8 flex
       h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-16 md:h-[330px] "
        >
          <img
            src="/images/shop/printings-images.jpg "
            alt=""
            className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
          />

          <div className="absolute flex flex-col items-center justify-center">
            <HeadingAccent>· Ilustrografia ·</HeadingAccent>
            <PageHeading>Payment Method</PageHeading>
            <IconDivider>
              <FaCoins className="text-xl md:text-2xl" />
            </IconDivider>
          </div>
        </div>
        <CheckoutSteps step1={true} step2={true} step3={true} step4={false} />

        <Form.Root
          className="mt-5 flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3 "
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Field className="flex flex-col" name="address">
            <div className="flex items-baseline justify-between">
              <Form.Label className=" form-label">Methods</Form.Label>
            </div>

            <RadioGroup.Root
              className="flex flex-col gap-4"
              defaultValue={paymentMethod}
              aria-label="payment-method"
            >
              <div className="flex items-center">
                <RadioGroup.Item
                  className="h-5 w-5 rounded-full border border-red-magic bg-ivory disabled:border-opacity-50 disabled:bg-opacity-80  disabled:hover:cursor-not-allowed"
                  value="PayPal"
                  id="r1"
                  onClick={(e) => setPaymentMethod(e.currentTarget.value)}
                >
                  <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-magic after:content-[""]' />
                </RadioGroup.Item>
                <label
                  className=" text-md pl-4 font-montserrat text-xs uppercase leading-4 text-black-magic dark:text-ivory"
                  htmlFor="r1"
                >
                  PayPal or Credit Card
                </label>
              </div>
              <div className="flex items-center">
                <RadioGroup.Item
                  disabled
                  className="h-5 w-5 rounded-full border border-red-magic bg-ivory disabled:border-opacity-50 disabled:bg-opacity-80  disabled:hover:cursor-not-allowed"
                  value="przelewy24"
                  id="r2"
                  onClick={(e) => setPaymentMethod(e.currentTarget.value)}
                >
                  <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-magic after:content-[""]' />
                </RadioGroup.Item>
                <label
                  className=" text-md pl-4 font-montserrat text-xs uppercase leading-4 text-black-magic dark:text-ivory"
                  htmlFor="r2"
                >
                  Przelewy24 <span className="text-2xs">(unavailable)</span>
                </label>
              </div>
              <div className="flex items-center">
                <RadioGroup.Item
                  disabled
                  className="h-5 w-5 rounded-full border border-red-magic bg-ivory disabled:border-opacity-50 disabled:bg-opacity-80  disabled:hover:cursor-not-allowed"
                  value="cash"
                  id="r3"
                  onClick={(e) => setPaymentMethod(e.currentTarget.value)}
                >
                  <RadioGroup.Indicator className='relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-lg after:bg-red-magic after:content-[""]' />
                </RadioGroup.Item>
                <label
                  className=" text-md pl-4 font-montserrat text-xs uppercase leading-4 text-black-magic dark:text-ivory "
                  htmlFor="r3"
                >
                  Cash <span className="text-2xs">(unavailable)</span>
                </label>
              </div>
            </RadioGroup.Root>
          </Form.Field>
          <Form.Submit asChild>
            <ButtonSubmit>Continue</ButtonSubmit>
          </Form.Submit>
        </Form.Root>
      </div>
    </>
  );
};
export default PaymentPage;
