import * as Form from "@radix-ui/react-form";
import { Rating } from "../../types/Product";

type Props = {
  rating: Rating;
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
};
const RatingField = ({ rating, setRating }: Props) => {
  return (
    <>
      {" "}
      {/* rating */}
      <Form.Field className="flex flex-col" name="ratingRating">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Rating (0-5)
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Rating
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) < 0 || Number(value) > 5}
          >
            Please provide a valid Rating
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="number"
            required
            placeholder="Enter rating"
            value={rating.rating}
            onChange={(e) =>
              setRating({
                ...rating,
                rating: Number(e.target.value),
                numReviews: rating.numReviews || 0,
              })
            }
          />
        </Form.Control>
      </Form.Field>
    </>
  );
};
export default RatingField;
