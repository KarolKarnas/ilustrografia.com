import * as Form from "@radix-ui/react-form";
import { ChangeEvent } from "react";
import { useUploadProductImageMutation } from "../../slices/productsApiSlice";
import { toast } from "react-toastify";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
// import InputTextField from './InputTextField';

type Props = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};
const UploadMainImageField = ({ images, setImages }: Props) => {
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const uploadFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      console.log("no file selected");
    } else {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      try {
        const res = await uploadProductImage(formData).unwrap();
        // console.log(res);
        toast.success(res.message);
        setImages([res.image]);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
    <>
      <Form.Field className="flex flex-col" name="mainImageUrl">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">Main Image URL</Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Main Image URL
          </Form.Message>
          <Form.Message
            className="form-message"
            match={(value) => Number(value) < 0}
          >
            Please provide a Main Image URL
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
            type="text"
            required
            placeholder="Enter Main image url"
            value={images[0]}
            onChange={(e) => setImages([e.target.value])}
            // onChange={(e) => setNewStatistic(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="flex flex-col" name="uploadMainImage">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">Add Product Image</Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Product Image
          </Form.Message>
          <Form.Message className="form-message" match="typeMismatch">
            Please provide a Product Image
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="rounded-md bg-white px-4 py-3 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5 "
            type="file"
            // required
            // placeholder='Enter Number of Reviews'
            // value={rating?.numReviews}
            onChange={uploadFileHandler}
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default UploadMainImageField;
