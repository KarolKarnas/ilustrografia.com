import { useState } from "react";
import InputTextField from "./InputTextField";
import * as Form from "@radix-ui/react-form";
import { VariationOptionalId } from "../../types/Product";
import InputNumberField from "./InputNumberField";
import { FaTrash } from "react-icons/fa";

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
      {/* md:w-9/12 lg:w-6/12 2xl:w-1/3 */}
      <Form.Root className="flex w-full items-center gap-1 md:gap-5 ">
        <div
          onClick={() => handleDeleteVariation(index)}
          className=" cursor-pointer rounded-3xl bg-red-magic p-2 text-xs text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110 "
        >
          <FaTrash />
        </div>

        <div className="w-full">
          <InputTextField
        minimal
            shortName={"sku"}
            name={"sku"}
            onChangeFun={(e) => handleSetSku(e.target.value)}
            value={newSku}
            required={true}
          />
        </div>

        <div className="w-36">
          <InputNumberField
          minimal
            shortName={"price"}
            name={"price"}
            onChangeFun={(e) =>
              handleSetPrice(
                Number(e.target.value) < 1 ? 1 : Number(e.target.value),
              )
            }
            value={newPrice}
            required={true}
          />
        </div>
        <div className="w-36">
          <InputNumberField
                 minimal
            shortName={"countInStock"}
            name={"Stock"}
            onChangeFun={(e) =>
              handleSetCountInStock(
                Number(e.target.value) < 0 ? 0 : Number(e.target.value),
              )
            }
            value={newCountInStock}
            required={true}
            minValue={-1}
          />
        </div>
      </Form.Root>
    </div>
  );
};
export default VariationEditForm;
