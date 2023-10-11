import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { useNavigate } from "react-router-dom";
import { addShippingAddress } from "../../slices/cartSlice";
import CheckoutSteps from "../../components/CheckoutSteps";
import PageHeading from "../../components/primitives/PageHeading";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import InputTextField from "../../components/Admin/InputTextField";
import ImageMouseMoving from "../../components/ImageMouseMoving";
import HeadingAccent from "../../components/primitives/HeadingAccent";
import IconDivider from "../../components/primitives/IconDivider";
import { FaBasketShopping, FaCar, FaHouse } from "react-icons/fa6";

const ShippingPage = () => {
  const { shippingAddress } = useAppSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || "",
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, city, postalCode, country }));

    navigate("/payment");
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
           {/* <div className="hidden md:block md:w-3/4 md:absolute md:left-0  md:top-0 ">
          <ImageMouseMoving src={"/images/shop/baba-checkout.png"} />
        </div> */}



      <div
        className="relative mb-8 flex
       h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust sm:bg-inherit md:mb-16 md:h-[330px] "
      >
        <img
          src="/images/shop/baba-checkout-cat.jpg "
          alt=""
          className="hidden h-full w-full rounded-3xl  object-none dark:invert-90 sm:block"
        />

        <div className="absolute flex flex-col items-center justify-center">
          <HeadingAccent>· Ilustrografia ·</HeadingAccent>
          <PageHeading>Shipping Address</PageHeading>
          <IconDivider>
            <FaHouse className="text-xl md:text-2xl" />
          </IconDivider>
        </div>
      </div>

      <CheckoutSteps step1={true} step2={true} step3={false} step4={false} />

      {/* <PageHeading>Shipping</PageHeading> */}
      <Form.Root
        className="flex w-full flex-col gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputTextField
          shortName={"address"}
          name={"Address"}
          onChangeFun={(e) => setAddress(e.target.value)}
          value={address}
          required={true}
        />

        <InputTextField
          shortName={"city"}
          name={"City"}
          onChangeFun={(e) => setCity(e.target.value)}
          value={city}
          required={true}
        />

        <InputTextField
          shortName={"postalCode"}
          name={"Postal Code"}
          onChangeFun={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          required={true}
        />

        <InputTextField
          shortName={"country"}
          name={"Country"}
          onChangeFun={(e) => setCountry(e.target.value)}
          value={country}
          required={true}
        />

        <Form.Submit asChild>
          <ButtonSubmit>Continue</ButtonSubmit>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
export default ShippingPage;
