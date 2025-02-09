import Rating from "../../components/Rating";
import { ReviewUser } from "../../types/Product";

type ReviewsProps = {
  reviews: ReviewUser[];
};
const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="my-2 flex flex-col gap-4 md:my-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col rounded-md bg-white p-3 shadow-md dark:bg-angel-space md:p-6"
        >
          <div className="mb-2 flex justify-between">
            <div className="flex items-start gap-3">
              <span className="font-semibold ">{review.name}</span>
              <Rating rating={review.rating} />
            </div>
            <span className=" text-xs font-semibold">
              {review.createdAt.substring(0, 10)}
            </span>
          </div>
          <p className="text-sm italic">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
export default Reviews;
