import * as Form from "@radix-ui/react-form";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "../../slices/productsApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../../components/Message";
import { SyntheticEvent, useState, useEffect } from "react";
import {
  Category,
  Details,
  ProductOptions,
  Rating,
  Tag,
  VariationOptionalId,
} from "../../types/Product";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import { toast } from "react-toastify";

import TagsForm from "../../components/Admin/TagsForm";
import CategoriesForm from "../../components/Admin/CategoriesForm";
import {
  productOptionsInitial,
  ratingInitial,
} from "../../utils/initialStates";
import StatisticsForm from "../../components/Admin/StatisticsForm";
import VariationForm from "../../components/Admin/VariationForm";
import UploadArtPrintField from "../../components/Admin/UploadArtPrintField";
import UploadMainImageField from "../../components/Admin/UploadMainImageField";
import NumberReviewsField from "../../components/Admin/NumberReviewsField";
import RatingField from "../../components/Admin/RatingField";
import NameField from "../../components/Admin/NameField";
import UploadCanvasField from "../../components/Admin/UploadCanvasField";
import UploadPosterField from "../../components/Admin/UploadPosterField";
import UploadPremiumField from "../../components/Admin/UploadPremiumField";
import DetailsFields from "../../components/Admin/DetailsFields";

const ProductEditScreen = () => {
  const { slug: productSlug } = useParams();
  const navigate = useNavigate();

  // const [product, setProduct] = useState<Product>();

  const [_id, set_Id] = useState("");
  const [details, setDetails] = useState<Details>({ story: "" });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [rating, setRating] = useState<Rating>(ratingInitial);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [images, setImages] = useState<string[]>([""]);
  const [options, setOptions] = useState<ProductOptions>(productOptionsInitial);
  const [statistics, setStatistics] = useState<string[]>([]);
  const [variations, setVariations] = useState<VariationOptionalId[]>([]);

  // console.log(details)

  if (!productSlug) {
    return <div>No slug provided</div>;
  }
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productSlug);

  console.log(product);

  const [updateProduct, { isLoading: loadingUpdate, error: updateError }] =
    useUpdateProductMutation();

  useEffect(() => {
    if (!isLoading) {
      if (product) {
        setDetails(product.details);
        set_Id(product._id);
        setName(product.name);
        setSlug(product.slug);
        setRating(product.rating);
        setCategories(product.categories);
        setTags(product.tags);
        setImages(product.images);
        setOptions(product.options);
        setVariations(product.variations);
        setStatistics(product.statistics);
      }
    }
  }, [product]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      setName("");
      return toast.error("Just empty spaces here...");
    }
    try {
      await updateProduct({
        details: {
          story: details.story.trim(),
          ytLink: details.ytLink?.trim(),
          latinName: details.latinName?.trim(),
          occurrence: details.occurrence?.trim(),
        },
        productSlug,
        name: name.trim(),
        slug: slug.trim(),
        rating,
        categories,
        tags,
        images,
        options,
        variations,
        _id,
        statistics,
      }).unwrap();
      toast.success("product updated successfully");
      refetch();
      navigate(`/admin/product-list/${slug}/edit`);
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  return (
    <div className="flex w-11/12 flex-col gap-16">
      <div className="flex w-full flex-col justify-center sm:gap-10  md:flex-row xl:gap-20">
        <div className=" flex w-full  md:sticky md:top-8 h-full flex-col gap-5 md:w-3/12">
          <img
            className=""
            src={product?.images[0]}
            alt={product?.slug}
          />
					<div className="flex md:w-3/12">
					<img
            className=""
            src={product?.options.material["art-print"].images[0]}
            alt={`${product?.slug} art print`}
          />

					<img
            className=""
            src={product?.options.material["painting-on-canvas"].images[0]}
            alt={`${product?.slug} painting on canvas`}
          />
										<img
            className=""
            src={product?.options.material["poster"].images[0]}
            alt={`${product?.slug} poster`}
          />
										<img
            className=""
            src={product?.options.material["premium-print"].images[0]}
            alt={`${product?.slug} premium print`}
          />
					
					</div>
          <button
            onClick={handleSubmit}
            className={` h-6 w-full border border-red-magic bg-red-magic/60   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs `}
          >
            Update
          </button>

					<Link to={"/admin/product-list"}>
            <button
              className={`
								
							h-6 w-full border border-black-magic bg-black-magic   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic/80 hover:border-red-magic md:h-10 md:w-full md:text-xs`}
            >
              Go Back
            </button>
          </Link>{" "}
        </div>

        <div className="w-full dark:text-ivory md:w-9/12">
          <h1 className="mt-5 text-center text-3xl font-bold">Edit Product</h1>{" "}

          {loadingUpdate && <div>Loading...</div>}
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <Message variant="bad" message={getError(error as ApiError)} />
          ) : product ? (
            <div className="flex w-full  justify-center gap-10 ">
              <div className="w-1/2">
								<Form.Root className="w-full " onSubmit={(e) => handleSubmit(e)}>
									<NameField
										updateError={updateError}
										name={name}
										setName={setName}
										setSlug={setSlug}
									/>
									<DetailsFields setDetails={setDetails} details={details} />
									<RatingField rating={rating} setRating={setRating} />
									<NumberReviewsField rating={rating} setRating={setRating} />
									<UploadMainImageField images={images} setImages={setImages} />
									<UploadArtPrintField
										options={options}
										setOptions={setOptions}
									/>
									<UploadCanvasField options={options} setOptions={setOptions} />
									<UploadPosterField options={options} setOptions={setOptions} />
									<UploadPremiumField options={options} setOptions={setOptions} />
									{/* <Form.Submit asChild>
										<button
											// add disabled styling
											className="mt-5 w-full bg-zinc-900 py-2 text-center text-white hover:cursor-pointer  hover:bg-red-200"
											disabled={isLoading}
										>
											Update
										</button>
									</Form.Submit> */}
									{isLoading && <div>Loading...</div>}
								</Form.Root>


								<StatisticsForm
										statistics={statistics}
										setStatistics={setStatistics}
									/>
									<CategoriesForm
										categories={categories}
										setCategories={setCategories}
									/>
									<TagsForm tags={tags} setTags={setTags} />

				

							</div>
							<div className="w-1/2">
                <VariationForm
                  variations={variations}
                  setVariations={setVariations}
                  slug={slug}
                  product={product}
                />
								</div>
      
            </div>
          ) : (
            <div>No product found</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductEditScreen;
