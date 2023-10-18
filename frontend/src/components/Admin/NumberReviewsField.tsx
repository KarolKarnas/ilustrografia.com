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
          <Form.Label className=" form-label">
            Number of Reviews
          </Form.Label>
          <Form.Message className="form-message" match="valueMissing">
            Please enter Number of Reviews
          </Form.Message>
          <Form.Message
            className="form-message"
            match={(value) => Number(value) < 0}
          >
            Please provide a Number of Reviews
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="form-input "
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
