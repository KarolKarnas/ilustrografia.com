import * as Form from "@radix-ui/react-form";
import { SyntheticEvent, useState } from "react";
import _ from "lodash";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Category } from "../../types/Product";
import InputTextField from "./InputTextField";

type CategoriesFormProps = {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};

const CategoriesForm = ({ categories, setCategories }: CategoriesFormProps) => {
  const [categoryName, setCategoryName] = useState("");
  const handleSubmitCategory = (e: SyntheticEvent) => {
    e.preventDefault();
    if (categoryName.trim() === "") {
      setCategoryName("");
      return toast.error("Just empty spaces here...");
    }

    const categorySlug = _.kebabCase(categoryName.trim());
    if (
      _.find(categories, function (category) {
        return category.slug === categorySlug;
      })
    ) {
      setCategoryName("");
      return toast.error(`We already have '${categoryName}' in categories`);
    }
    setCategories([
      ...categories,
      { name: categoryName.trim(), slug: categorySlug },
    ]);
    setCategoryName("");
    return toast.success(
      "Category added successfully, remember to save changes",
    );
  };

  const handleDeleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_category, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8">
      <div className="flex flex-col">
        <h4 className=" mb-2 font-montserrat text-base font-semibold text-black-magic dark:text-ivory">
          Category list
        </h4>

        <div className="mb-2 flex flex-col gap-1">
          {categories?.map((category, index) => (
            <div key={index} className="flex items-center text-sm">
              <span
                onClick={() => handleDeleteCategory(index)}
                className="mr-2 cursor-pointer rounded-3xl bg-red-magic p-2 text-xs text-ivory transition duration-300 ease-in-out md:hover:-translate-y-1 md:hover:scale-110 "
              >
                <FaTrash />
              </span>
              <span className="">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Form.Root className="w-full" onSubmit={(e) => handleSubmitCategory(e)}>
        <InputTextField
          shortName="newCategory"
          name="New Category"
          value={categoryName}
          required={true}
          onChangeFun={(e) => setCategoryName(e.target.value)}
        />

        <Form.Submit asChild>
          <button className="			mt-5	h-6 w-full border border-black-magic bg-black-magic text-2xs font-semibold     uppercase text-ivory transition-colors duration-300  hover:border-red-magic hover:bg-red-magic/80 dark:border-red-magic/50 dark:bg-red-magic/20 dark:hover:border-red-magic dark:hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs">
            Add Category
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};
export default CategoriesForm;
