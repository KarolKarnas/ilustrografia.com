import * as Form from "@radix-ui/react-form";
import { SyntheticEvent } from "react";
import SelectNumber from "./SelectNumber";

type Props = {
  handleSubmitReview: (e: SyntheticEvent) => Promise<void>;
  setReviewRating: (value: React.SetStateAction<number>) => void;
  reviewComment: string;
  setReviewComment: React.Dispatch<React.SetStateAction<string>>;
};

const ReviewForm = ({
  handleSubmitReview,
  setReviewRating,
  reviewComment,
  setReviewComment,
}: Props) => {
  return (
    <Form.Root
      className="flex w-full flex-col gap-5"
      onSubmit={(e) => handleSubmitReview(e)}
    >
      <Form.Field className="flex flex-col" name="review rating">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" mb-2 font-montserrat text-sm font-semibold text-black-magic dark:text-ivory">
            Rating (1-5)
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter your kind rating
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match={(value) => Number(value) < 0 || Number(value) > 5}
          >
            Please provide a valid Rating
          </Form.Message>
        </div>
        <Form.Control asChild>
          <SelectNumber selectNumber={5} onChange={setReviewRating} defaultValue="5"/>
        </Form.Control>
      </Form.Field>
      <Form.Field className="flex flex-col" name="comment">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" mb-2 font-montserrat text-sm font-semibold text-black-magic dark:text-ivory">
            Review
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter your Review
          </Form.Message>
          <Form.Message
            className="text-md text-red-magic"
            match="typeMismatch"
          ></Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="dark:bg-bg-black-magic/50 flex h-36 w-full flex-col gap-2  rounded-md bg-white p-4 text-sm text-eerie-black shadow-md  outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic  dark:text-ivory  dark:focus:outline-fair-space/5 "
            required
            placeholder="Write your kind word here..."
            value={reviewComment}
            onChange={(e) => {
              setReviewComment(e.target.value);
            }}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="mt-6 h-10 w-full bg-black-magic  text-xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic dark:border dark:border-red-magic dark:bg-red-magic/60 dark:hover:bg-red-magic/80 md:px-32">
          Add Review
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
export default ReviewForm;
