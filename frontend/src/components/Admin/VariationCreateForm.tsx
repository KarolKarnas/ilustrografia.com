import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";
import { Product, VariationOptionalId } from "../../types/Product";
import SelectString from "./SelectString";

type VariationCreateFormProps = {
  variations: VariationOptionalId[];
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
  slug: string;
  product: Product;
};

const VariationCreateForm = ({
  variations,
  setVariations,
  slug,
  product,
}: VariationCreateFormProps) => {
  const [optionsMaterial, setOptionsMaterial] = useState("");
  const [optionsSize, setOptionsSize] = useState("");
  const [countInStock, setCountInStock] = useState(1);
  const [price, setPrice] = useState(100);

  const handleSubmitVariation = (e: SyntheticEvent) => {
    e.preventDefault();
    if (optionsMaterial === "") {
      return toast.error("Select the material");
    } else if (optionsSize === "") {
      return toast.error("Select the size");
    } else {
      const currentSku = `${slug}-${optionsMaterial}-${optionsSize}`;
      const currentVariationOptions = {
        material: optionsMaterial,
        size: optionsSize,
      };

      setVariations([
        ...variations,
        {
          SKU: currentSku,
          countInStock,
          options: currentVariationOptions,
          price,
          productSlug: slug,
          tags: [{ name: "", slug: "" }],
        },
      ]);

      return toast.success(
        "Variation added successfully, remember to save changes",
      );
    }
  };

  const productMaterials = Object.keys(product.options.material).filter(
    (key) => key !== "optionName",
  );

  const productSizes = Object.keys(product.options.size).filter(
    (key) => key !== "optionName",
  );

  return (
    <div className="rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8">
      <h3 className="mb-2 font-montserrat text-base font-semibold text-black-magic dark:text-ivory">
        Create Variation
      </h3>
      <Form.Root
        className="flex w-full flex-col gap-5"
        onSubmit={(e) => handleSubmitVariation(e)}
      >
        <Form.Field className="flex flex-col" name="price">
          <div className="flex items-baseline justify-between">
            <Form.Label className="form-label">Price</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please write price of variation
            </Form.Message>
            <Form.Message
              className="form-message"
              match={(value) => Number(value) <= 0}
            >
              Please provide a valid price
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="form-input "
              type="number"
              required
              placeholder="Enter Variation Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="flex flex-col" name="countInStock">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" form-label">Count In Stock</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please provide Count in Stock
            </Form.Message>
            <Form.Message
              className="form-message"
              match={(value) => Number(value) <= 0}
            >
              Please provide valid Count in Stock
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="form-input "
              type="number"
              required
              placeholder="Enter Count In Stock"
              value={countInStock}
              onChange={(e) => setCountInStock(Number(e.target.value))}
            />
          </Form.Control>
        </Form.Field>
        <SelectString
          onChange={setOptionsMaterial}
          options={productMaterials}
          name="Material"
        />
        <SelectString
          onChange={setOptionsSize}
          options={productSizes}
          name="Size"
        />

        <Form.Submit asChild>
          <button className="h-6 w-full border border-black-magic bg-black-magic text-2xs font-semibold   uppercase text-ivory transition-colors duration-300  hover:border-red-magic hover:bg-red-magic/80 dark:border-red-magic/50 dark:bg-red-magic/20 dark:hover:border-red-magic dark:hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs">
            Add Variation
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
export default VariationCreateForm;
