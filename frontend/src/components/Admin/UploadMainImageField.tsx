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
        console.log(res);
        toast.success(res.message);
        setImages([res.image]);
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  return (
    <>
      {/* <InputTextField
        shortName={"mainImageUrl"}
        name={"Main Image URL"}
        onChangeFun={(e) => setImages([e.target.value])}
        value={images[0]}
        required={false}
      /> */}

      <Form.Field className="flex flex-col" name="mainImageUrl">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Main Image URL
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Main Image URL
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) < 0}
          >
            Please provide a Main Image URL
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
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
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Add Product Image
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Product Image
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a Product Image
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
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
