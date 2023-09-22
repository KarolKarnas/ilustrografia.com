import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import _ from "lodash";
// import * as Select from '@radix-ui/react-select';

import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Tag } from "../../types/Product";

type Props = {
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

const TagsForm = ({ tags, setTags }: Props) => {
  const [tagName, setTagName] = useState("");

  //Tag
  const handleSubmitTag = (e: SyntheticEvent) => {
    e.preventDefault();
    if (tagName.trim() === "") {
      setTagName("");
      return toast.error("Just empty spaces here...");
    }
    const tagSlug = _.kebabCase(tagName);
    //duplicate Category here
    setTags([...tags, { name: tagName, slug: tagSlug }]);
  };

  const handleDeleteTag = (index: number) => {
    const updatedTags = tags.filter((_tag, i) => i !== index);
    setTags(updatedTags);
  };

  return (
    <Form.Root className="w-full" onSubmit={(e) => handleSubmitTag(e)}>
      <div className="flex flex-col">
        <h3>Tag list</h3>
        {tags?.map((tag, index) => (
          <div key={index} className="flex items-center">
            <FaTrash
              className="hover:cursor-pointer hover:text-red-300"
              onClick={() => handleDeleteTag(index)}
            />{" "}
            {tag.name}
          </div>
        ))}
      </div>

      <Form.Field className="flex flex-col" name="name">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Tag Name
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Tag Name
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a valid Tag Name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            required
            placeholder="Enter Tag Name"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button
          // add disabled styling
          className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
          // disabled={isLoading}
        >
          Add Tag
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
export default TagsForm;
