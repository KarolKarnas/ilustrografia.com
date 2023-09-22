import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import _ from "lodash";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Category } from "../../types/Product";

type Props = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const CategoriesForm = ({ categories, setCategories }: Props) => {
  const [categoryName, setCategoryName] = useState("");

  // Category
  const handleSubmitCategory = (e: SyntheticEvent) => {
    e.preventDefault();
    if (categoryName.trim() === "") {
      setCategoryName("");
      return toast.error("Just empty spaces here...");
    }
    const categorySlug = _.kebabCase(categoryName.trim());
    //duplicate Category here
    setCategories([
      ...categories,
      { name: categoryName.trim(), slug: categorySlug },
    ]);
  };

  const handleDeleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_category, i) => i !== index);
    setCategories(updatedCategories);
  };
  return (
    <Form.Root className="w-full" onSubmit={(e) => handleSubmitCategory(e)}>
      <div className="flex flex-col">
        <h3>Category list</h3>
        {categories?.map((category, index) => (
          <div key={index} className="flex items-center">
            <FaTrash
              className="hover:cursor-pointer hover:text-red-300"
              onClick={() => handleDeleteCategory(index)}
            />{" "}
            {category.name}
          </div>
        ))}
      </div>

      <Form.Field className="flex flex-col" name="name">
        <div className="flex items-baseline justify-between">
          <Form.Label className=" text-lg font-semibold leading-8 text-zinc-600">
            Category Name
          </Form.Label>
          <Form.Message className="text-md text-red-magic" match="valueMissing">
            Please enter Category Name
          </Form.Message>
          <Form.Message className="text-md text-red-magic" match="typeMismatch">
            Please provide a valid Category Name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="inline-flex w-full items-center justify-center rounded-none border border-solid border-zinc-500 bg-slate-200 p-2 text-zinc-600 focus:rounded-none focus:outline-dashed focus:outline-red-300 "
            type="text"
            required
            placeholder="Enter Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button
          // add disabled styling
          className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
          // disabled={isLoading}
        >
          Add Category
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
export default CategoriesForm;
