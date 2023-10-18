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

const UploadCanvasField = ({ options, setOptions }: Props) => {
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const uploadCanvasFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
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
            "painting-on-canvas": {
              ...options.material["painting-on-canvas"],
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
      <Form.Field className="flex flex-col" name="canvasImageUrl">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">
            Canvas Image URL
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Canvas Please enter Image URL
          </Form.Message>
          <Form.Message className="form-message" match="typeMismatch">
            Please provide a Canvas Image URL
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
            type="text"
            required
            placeholder="Enter Canvas Image URL"
            value={options.material["painting-on-canvas"].images[0]}
            onChange={(e) => {
              const updatedOptions = {
                ...options,
                material: {
                  ...options.material,
                  "painting-on-canvas": {
                    ...options.material["painting-on-canvas"],
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

      <Form.Field className="flex flex-col" name="uploadCanvasImage">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">
            Add Product Canvas Image
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Product Canvas Image
          </Form.Message>
          <Form.Message className="form-message" match="typeMismatch">
            Please provide a Product Canvas Image
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="py-3 rounded-md bg-white px-4 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5 "
            type="file"
            // required
            // placeholder='Enter Number of Reviews'
            // value={rating?.numReviews}
            onChange={uploadCanvasFileHandler}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default UploadCanvasField;
