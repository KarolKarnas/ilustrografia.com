import * as Form from "@radix-ui/react-form";
import { ProductOptions } from "../../types/Product";
import { ChangeEvent } from "react";
import { useUploadProductImageMutation } from "../../slices/productsApiSlice";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";

type UploadPremiumFieldProps = {
  options: ProductOptions;
  setOptions: React.Dispatch<React.SetStateAction<ProductOptions>>;
};

const UploadPremiumField = ({
  options,
  setOptions,
}: UploadPremiumFieldProps) => {
  const [uploadProductImage] = useUploadProductImageMutation();

  const uploadPremiumFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      console.log("no file selected");
    } else {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      try {
        const res = await uploadProductImage(formData).unwrap();
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
          <Form.Label className=" form-label">
            Premium Print Image URL
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Premium Print Please enter Image URL
          </Form.Message>
          <Form.Message className="form-message" match="typeMismatch">
            Please provide a Premium Print Image URL
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
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
              setOptions(updatedOptions);
            }}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="flex flex-col" name="uploadPremiumImage">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">
            Add Product Premium Print Image
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Product Premium Print Image
          </Form.Message>
          <Form.Message className="form-message" match="typeMismatch">
            Please provide a Product Premium Print Image
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="rounded-md bg-white px-4 py-3 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5 "
            type="file"
            onChange={uploadPremiumFileHandler}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default UploadPremiumField;
