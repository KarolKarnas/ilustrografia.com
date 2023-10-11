import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { useNavigate } from "react-router-dom";
import { addShippingAddress } from "../../slices/cartSlice";
import CheckoutSteps from "../../components/CheckoutSteps";
import PageHeading from "../../components/primitives/PageHeading";
import ButtonSubmit from "../../components/primitives/ButtonSubmit";
import InputTextField from "../../components/Admin/InputTextField";

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

  // console.log(cart)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, city, postalCode, country }));

    navigate("/payment");
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
      <CheckoutSteps step1={true} step2={true} step3={false} step4={false} />
      <PageHeading>Shipping</PageHeading>
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
