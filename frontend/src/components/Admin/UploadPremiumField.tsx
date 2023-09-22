import * as Form from "@radix-ui/react-form";
import { ProductOptions } from "../../types/Product";
import { ChangeEvent } from "react";
import { useUploadProductImageMutation } from "../../slices/productsApiSlice";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";

type Props = {
  options: ProductOptions;
  setOptions: React.Dispatch<React.SetStateAction<ProductOptions>>;
};

const UploadPremiumField = ({ options, setOptions }: Props) => {
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const uploadPremiumFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      console.log("no file selected");
    } else {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      try {
        const res = await uploadProductImage(formData).unwrap();
        // console.log(res);
        toast.success(res.message);

        const updatedOptions = {
          ...options,
          material: {
            ...options.material,
            "premium-print": {
              ...options.material["premium-print"],
              images: [res.image],
            },
          },
        };
        setOptions(updatedOptions);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
    <>
      <Form.Field className="flex flex-col" name="premiumPrintImageUrl">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Premium Print Image URL
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Premium Print Please enter Image URL
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a Premium Print Image URL
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            required
            placeholder="Enter Premium Print Image URL"
            value={options.material["premium-print"].images[0]}
            onChange={(e) => {
              const updatedOptions = {
                ...options,
                material: {
                  ...options.material,
                  "premium-print": {
                    ...options.material["premium-print"],
                    images: [e.target.value],
                  },
                },
              };
              // Set the updated options object in the state
              setOptions(updatedOptions);
            }}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="flex flex-col" name="uploadPremiumImage">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Add Product Premium Print Image
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Product Premium Print Image
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a Product Premium Print Image
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="file"
            // required
            // placeholder='Enter Number of Reviews'
            // value={rating?.numReviews}
            onChange={uploadPremiumFileHandler}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default UploadPremiumField;
