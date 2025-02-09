import { ReviewUser } from "../../types/Product";
import ReviewEditForm from "./ReviewEditForm";

type ReviewUserProps = {
  reviews: ReviewUser[] | undefined;
  setReviews: React.Dispatch<React.SetStateAction<ReviewUser[] | undefined>>;
};

const ReviewList = ({ reviews, setReviews }: ReviewUserProps) => {
  return (
    <div className="rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8">
      <h3 className="form-label">
        Edit Reviews <span className="text-2xs uppercase">(cheater mode)</span>
      </h3>
      <div className="mt-5 flex flex-col gap-5">
        {reviews?.map((review, index) => (
          <div key={index} className="">
            <ReviewEditForm
              createdAt={review.createdAt}
              user={review.user}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
              setReviews={setReviews}
              index={index}
              reviews={reviews}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewList;
