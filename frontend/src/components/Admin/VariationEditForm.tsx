import { useState } from "react";
import InputTextField from "./InputTextField";
import * as Form from "@radix-ui/react-form";
import { VariationOptionalId } from "../../types/Product";
import InputNumberField from "./InputNumberField";
import { FaChevronDown, FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  price: number;
  countInStock: number;
  index: number;
  sku: string;
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
  variations: VariationOptionalId[];
};

const VariationEditForm = ({
  price,
  countInStock,
  sku,
  setVariations,
  index,
  variations,
}: Props) => {
  const [newPrice, setNewPrice] = useState<number>(price);
  const [newCountInStock, setNewCountInStock] = useState<number>(countInStock);
  const [newSku, setNewSku] = useState<string>(sku);

  const handleSetPrice = (price: number) => {
    setNewPrice(price);
    const updatedVariations = [...variations];
    updatedVariations[index] = { ...updatedVariations[index], price: price };
    setVariations(updatedVariations);
  };

  const handleSetCountInStock = (countInStock: number) => {
    setNewCountInStock(countInStock);

    const updatedVariations = [...variations];
    updatedVariations[index] = {
      ...updatedVariations[index],
      countInStock: countInStock,
    };
    setVariations(updatedVariations);
  };
  const handleSetSku = (sku: string) => {
    setNewSku(sku);

    const updatedVariations = [...variations];
    updatedVariations[index] = {
      ...updatedVariations[index],
      SKU: sku,
    };
    setVariations(updatedVariations);
  };

  const handleDeleteVariation = (index: number) => {
    const updatedVariations = variations.filter((_variation, i) => i !== index);
    setVariations(updatedVariations);
  };

  return (
    <div>
      <Form.Root className="flex w-full items-center gap-5 md:w-9/12 lg:w-6/12 2xl:w-1/3">
        <div>
          <FaTrash
            className="hover:cursor-pointer hover:text-red-300"
            onClick={() => handleDeleteVariation(index)}
          />
        </div>

  

        <InputTextField
          shortName={"sku"}
          name={"SKU"}
          onChangeFun={(e) => handleSetSku(e.target.value)}
          value={newSku}
          required={true}
        />

        <InputNumberField
          shortName={"price"}
          name={"Price"}
          onChangeFun={(e) =>
            handleSetPrice(
              Number(e.target.value) < 1 ? 1 : Number(e.target.value),
            )
          }
          value={newPrice}
          required={true}
        />
        <InputNumberField
          shortName={"countInStock"}
          name={"Count In Stock"}
          onChangeFun={(e) =>
            handleSetCountInStock(
              Number(e.target.value) < 0 ? 0 : Number(e.target.value),
            )
          }
          value={newCountInStock}
          required={true}
          minValue={-1}
        />
      </Form.Root>
    </div>
  );
};
export default VariationEditForm;
