import * as Form from "@radix-ui/react-form";
import { Rating } from "../../types/Product";

type Props = {
  rating: Rating;
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
};

const NumberReviewsField = ({ rating, setRating }: Props) => {
  return (
    <>
      {" "}
      {/* Number of Reviews */}
      <Form.Field className="flex flex-col" name="RatingNumReviews">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Number of Reviews
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Number of Reviews
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) < 0}
          >
            Please provide a Number of Reviews
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="number"
            required
            placeholder="Enter Number of Reviews"
            value={rating.numReviews}
            onChange={(e) =>
              setRating({
                ...rating,
                rating: rating.rating || 0,
                numReviews: Number(e.target.value),
              })
            }
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default NumberReviewsField;
