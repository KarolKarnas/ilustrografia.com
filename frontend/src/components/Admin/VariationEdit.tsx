import { useState } from "react";
import InputTextField from "./InputTextField";
import * as Form from "@radix-ui/react-form";
import { VariationOptionalId } from "../../types/Product";
import InputNumberField from "./InputNumberField";

type Props = {
  price: number;
  countInStock: number;
  index: number;
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
  variations: VariationOptionalId[];
};

const VariationEdit = ({
  price,
  countInStock,
  setVariations,
  index,
  variations,
}: Props) => {
  const [newPrice, setNewPrice] = useState(price);
  const [newCountInStock, setNewCountInStock] = useState(countInStock);

  const handleSetPrice = (price: number) => {
    setNewPrice(price);
    const updatedVariations = [...variations];
    updatedVariations[index] = { ...updatedVariations[index], price: price };
    setVariations(updatedVariations);
  };

  const handleSetCountInStock = (countInStock: number) => {


      setNewCountInStock(countInStock);
  
    const updatedVariations = [...variations];
    updatedVariations[index] = { ...updatedVariations[index], countInStock: countInStock };
    setVariations(updatedVariations);
  };

  return (
    <div>
      <Form.Root className="flex w-full gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3">
        
        <InputNumberField
          shortName={"price"}
          name={"Price"}
          onChangeFun={(e) => handleSetPrice(Number(e.target.value) < 1 ? 1 : Number(e.target.value))}
          value={newPrice}
          required={false}
        />
        <InputNumberField
          shortName={"countInStock"}
          name={"Count In Stock"}
          onChangeFun={(e) => handleSetCountInStock(Number(e.target.value) < 0 ? 0 : Number(e.target.value))}
          value={newCountInStock}
          required={false}
          minValue={-1}
        />
      </Form.Root>
    </div>
  );
};
export default VariationEdit;
