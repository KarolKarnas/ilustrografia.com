import { useState } from "react";
import { ReviewUser } from "../../types/Product";
import * as Form from "@radix-ui/react-form";
import { FaTrash } from "react-icons/fa";
import * as Select from "@radix-ui/react-select";
import React from "react";
import { FaChevronDown, FaCheck } from "react-icons/fa6";
import SelectNumber from "../../pages/ProductPage/SelectNumber";
import InputNumberField from "./InputNumberField";

type Props = {
  createdAt: string;
  user: string;
  name: string;
  rating: number;
  comment: string;
  index: number;
  reviews: ReviewUser[] | undefined;
  setReviews: React.Dispatch<React.SetStateAction<ReviewUser[] | undefined>>;
};

const ReviewEditForm = ({
  createdAt,
  user,
  name,
  rating,
  comment,
  index,
  reviews,
  setReviews,
}: Props) => {
  const [newRating, setNewRating] = useState<number>(rating);
  const [newComment, setNewComment] = useState<string>(comment);
  const [newUserName, setNewUserName] = useState<string>(name);

  const handleDeleteReview = (index: number) => {
    const updatedReviews = reviews?.filter((_review, i) => i !== index);
    setReviews(updatedReviews);
    // console.log("done");
  };

  const handleSetComment = (comment: string) => {
    setNewComment(comment);
    if (reviews) {
      const updatedReviews = [...reviews];
      updatedReviews[index] = {
        ...updatedReviews[index],
        comment: comment,
      };
      setReviews(updatedReviews);
    }
  };

  const handleSetRating = (rating: number) => {
    setNewRating(rating);
    if (reviews) {
      const updatedReviews = [...reviews];
      updatedReviews[index] = {
        ...updatedReviews[index],
        rating: rating,
      };
      setReviews(updatedReviews);
    }
  };
  const handleSetUserName = (userName: string) => {
    setNewUserName(userName);
    if (reviews) {
      const updatedReviews = [...reviews];
      updatedReviews[index] = {
        ...updatedReviews[index],
        name: userName,
      };
      setReviews(updatedReviews);
    }
  };

  return (
    <div className="rounded-lg bg-ivory p-4 shadow-md dark:bg-eerie-black md:p-8">
      {/* md:w-9/12 lg:w-6/12 2xl:w-1/3 */}
      <Form.Root className="flex w-full flex-col items-center gap-1 md:gap-5 lg:flex-row ">
        <div
          onClick={() => handleDeleteReview(index)}
          className=" cursor-pointer rounded-3xl bg-red-magic p-2 text-xs text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110 "
        >
          <FaTrash />
        </div>

        <div className="w-full">
          <Form.Field name="story">
            <div className="flex items-baseline justify-between">
              <Form.Label className="form-label">Story</Form.Label>
              <Form.Message className="form-message" match="valueMissing">
                Please enter story of the Creature
              </Form.Message>
            </div>

            <Form.Control asChild>
              <textarea
                required
                className="h-48 w-full gap-[5px] rounded-md bg-white px-4 py-3 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5"
                placeholder="Enter the Story"
                value={newComment}
                onChange={(e) => {
                  handleSetComment(e.target.value);
                }}
              />
            </Form.Control>
          </Form.Field>
        </div>

        <Form.Field className="flex flex-col" name="review rating">
          <div className="flex items-baseline justify-between">
            <Form.Label className=" mb-2 font-montserrat text-sm font-semibold text-black-magic dark:text-ivory">
              Rating
            </Form.Label>
          </div>
          <Form.Control asChild>
            <Select.Root
              defaultValue={newRating.toString()}
              // disabled={selectNumber <= 0}
              onValueChange={(value) => handleSetRating(Number(value))}
            >
              <Select.Trigger className="inline-flex h-10 items-center  justify-center gap-[5px] rounded-md bg-white px-4 text-[13px] leading-none text-black-magic shadow-md outline-none focus:outline-1 focus:outline-fair-space/60 dark:bg-black-magic dark:text-ivory dark:focus:outline-fair-space/5">
                <Select.Value placeholder="Select Rating" />
                <Select.Icon>
                  <FaChevronDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content className="">
                  <Select.Viewport className=" w-20 rounded-md border border-red-magic/50 bg-white text-black-magic shadow-lg dark:bg-black-magic">
                    <Select.Group>
                      {Array.from({ length: 5 }, (_, index) => (
                        <Select.Item
                          className={` ${
                            index === 5 - 1
                              ? ""
                              : "border-b border-b-red-magic/50"
                          } relative  flex h-8 select-none items-center justify-center  text-[13px] leading-none text-black-magic hover:cursor-pointer focus:outline focus:outline-2 data-[highlighted]:outline-none data-[highlighted]:hover:bg-red-magic data-[highlighted]:focus:bg-red-magic dark:bg-black-magic dark:text-ivory`}
                          key={index + 1}
                          value={(index + 1).toString()}
                        >
                          <Select.ItemText>{index + 1}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                            <FaCheck />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                  <Select.Arrow />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Control>
        </Form.Field>

        <Form.Field className="flex flex-col" name="userName">
          <div className={`flex items-baseline justify-between`}>
            <Form.Label className={`form-label`}>Name</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please enter your {name}
            </Form.Message>
            <Form.Message className="form-message" match="typeMismatch">
              Please provide a valid {name}
            </Form.Message>
            {newUserName !== "" ? (
              <Form.Message
                className="form-message"
                match={(value) => value.trim() === ""}
              >
                Just empty spaces here...
              </Form.Message>
            ) : null}
          </div>

          <Form.Control asChild>
            <input
              className="form-input"
              type="text"
              placeholder="Enter New Name"
              value={newUserName}
              onChange={(e) => {
                handleSetUserName(e.target.value);
              }}
              required
            />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </div>
  );
};
export default ReviewEditForm;

{
  /* <div className=" w-36">
          <Form.Field className="flex flex-col" name={"newRating"}>
            <div className={`flex items-baseline justify-between`}>
              <Form.Label className={`form-label`}>New Rating</Form.Label>
              <Form.Message className="form-message" match="valueMissing">
                Please enter your New Rating
              </Form.Message>
              <Form.Message className="form-message" match="typeMismatch">
                Please provide a valid New Rating
              </Form.Message>
            </div>

            <Form.Control asChild>
              <input
                className="form-input"
                type="number"
                placeholder={`Enter ${name}`}
                value={newRating}
                onChange={(e) => {
                  handleSetRating(Number(e.target.value));
                }}
                required
              />
            </Form.Control>
          </Form.Field>
        </div> */
}
