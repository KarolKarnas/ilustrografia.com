import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import _ from "lodash";
// import * as Select from '@radix-ui/react-select';

import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Tag } from "../../types/Product";
import InputTextField from "./InputTextField";

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
    //duplicate Category

    if (
      _.find(tags, function (tag) {
        return tag.slug === tagSlug;
      })
    ) {
      setTagName("");
      return toast.error(`We already have '${tagName}' in Tags`);
    }
    setTags([...tags, { name: tagName, slug: tagSlug }]);
    setTagName("")
    return toast.success(
      "Tag added successfully, remember to save changes",
    );

  };

  const handleDeleteTag = (index: number) => {
    const updatedTags = tags.filter((_tag, i) => i !== index);
    setTags(updatedTags);
  };

  return (
    <div className="rounded-xl bg-angel-dust p-4 md:p-8 shadow-xl dark:bg-angel-space">
      <div className="flex flex-col">
        <h4 className=" mb-2 font-montserrat text-base font-semibold text-black-magic dark:text-ivory">
          Tag list
        </h4>
        {tags?.map((tag, index) => (
          <div key={index} className="flex items-center text-sm">
            <span
              onClick={() => handleDeleteTag(index)}
              className="mr-2 cursor-pointer rounded-3xl bg-red-magic p-2 text-xs text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110 "
            >
              <FaTrash />
            </span>
            <span className="">{tag.name}</span>
          </div>
        ))}
      </div>

      <Form.Root className="w-full" onSubmit={(e) => handleSubmitTag(e)}>
        <InputTextField
          shortName="newTag"
          name="New Tag"
          value={tagName}
          required={true}
          onChangeFun={(e) => setTagName(e.target.value)}
        />

        <Form.Submit asChild>
          <button className="			mt-5	h-6 w-full border border-black-magic bg-black-magic text-2xs font-semibold     uppercase text-ivory transition-colors duration-300  hover:border-red-magic hover:bg-red-magic/80 dark:border-red-magic/50 dark:bg-red-magic/20 dark:hover:border-red-magic dark:hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs">
            Add Tag
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
export default TagsForm;
