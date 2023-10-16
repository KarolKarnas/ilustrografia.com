import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import { SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";
import { Product, VariationOptionalId } from "../../types/Product";
import { FaChevronDown, FaEdit, FaTrash } from "react-icons/fa";
import InputTextField from "./InputTextField";
import VariationEdit from "./VariationEdit";

type Props = {
  variations: VariationOptionalId[];
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
  slug: string;
  product: Product;
};

const VariationForm = ({ variations, setVariations, slug, product }: Props) => {
  // variation
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
      // setSku(currentSku);
      const currentVariationOptions = {
        material: optionsMaterial,
        size: optionsSize,
      };
      // setVariationOptions(currentVariationOptions);

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
    }
  };

  const handleDeleteVariation = (index: number) => {
    const updatedVariations = variations.filter((_variation, i) => i !== index);
    setVariations(updatedVariations);
  };
  const handleEditVariation = (index: number) => {
    // console.log(index);
    // console.log(variations[index]);
    
  };
  
  
  return (
    <Form.Root className="w-full" onSubmit={(e) => handleSubmitVariation(e)}>
      <div className="flex flex-col">
        <h3>Create Variation</h3>
        {variations?.map((variation, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col">
     
            {/* <FaEdit
              className="hover:cursor-pointer hover:text-red-300"
              onClick={() => handleEditVariation(index)}
            />{" "} */}
              <div className="flex items-center gap-2">
              <FaTrash
              className="hover:cursor-pointer hover:text-red-300"
              onClick={() => handleDeleteVariation(index)}
            />{" "}
                <div>{variation.SKU}</div>
                <div> Price: ${variation.price}</div>
                <div>Count In stock: {variation.countInStock}</div>
              </div>
              <VariationEdit price={variation.price} countInStock={variation.countInStock} setVariations={setVariations} index={index} variations={variations}/>
            </div>
          </div>
        ))}
      </div>

      <Form.Field className="flex flex-col" name="price">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Price
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please write price of variation
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) <= 0}
          >
            Please provide a valid price
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="number"
            required
            placeholder="Enter Variation Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </Form.Control>
      </Form.Field>
      {/* count in stock */}
      <Form.Field className="flex flex-col" name="countInStock">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Count In Stock
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please provide Count in Stock
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) <= 0}
          >
            Please provide a Count in Stock
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="number"
            required
            placeholder="Enter Count In Stock"
            value={countInStock}
            onChange={(e) => setCountInStock(Number(e.target.value))}
          />
        </Form.Control>
      </Form.Field>

      {/* options */}
      <div className="flex justify-between">
        {/* variation material */}
        <Select.Root onValueChange={(value) => setOptionsMaterial(value)}>
          <Select.Trigger>
            <Select.Value placeholder="Select Material" />
            <Select.Icon>
              <FaChevronDown />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content>
              <Select.ScrollUpButton />
              <Select.Viewport className="rounded-lg bg-gray-800 p-2 text-white shadow-lg">
                <Select.Group>
                  {Object.keys(product.options.material)
                    .filter((key) => key !== "optionName")
                    .map((material, i) => (
                      <Select.Item
                        // disabled={f === 'Grapes'}
                        key={`${material}-${i}`}
                        value={material.toLowerCase()}
                      >
                        <Select.ItemText>{material}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <FaChevronDown />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton />
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        {/* variation size */}

        <Select.Root onValueChange={(value) => setOptionsSize(value)}>
          <Select.Trigger>
            <Select.Value placeholder="Select Size" />
            <Select.Icon>
              <FaChevronDown />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content>
              <Select.ScrollUpButton />
              <Select.Viewport className="rounded-lg bg-gray-800 p-2 text-white shadow-lg">
                <Select.Group>
                  {Object.keys(product.options.size)
                    .filter((key) => key !== "optionName")
                    .map((size, i) => (
                      <Select.Item
                        // disabled={f === 'Grapes'}
                        key={`${size}-${i}`}
                        value={size.toLowerCase()}
                      >
                        <Select.ItemText>{size}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                          <FaChevronDown />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton />
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <Form.Submit asChild>
        <button
          // add disabled styling
          className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
          // disabled={isLoading}
        >
          Add Variation
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
export default VariationForm;
