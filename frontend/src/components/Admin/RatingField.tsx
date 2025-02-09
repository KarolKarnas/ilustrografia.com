import * as Form from "@radix-ui/react-form";
import { Rating } from "../../types/Product";

type RatingFieldProps = {
  rating: Rating;
  setRating: React.Dispatch<React.SetStateAction<Rating>>;
};
const RatingField = ({ rating, setRating }: RatingFieldProps) => {
  return (
    <>
      <Form.Field className="flex flex-col" name="ratingRating">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" form-label">
            Rating (0-5)
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Rating
          </Form.Message>
          <Form.Message
            className="form-message"
            match={(value) => Number(value) < 0 || Number(value) > 5}
          >
            Please provide a valid Rating
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input"
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
