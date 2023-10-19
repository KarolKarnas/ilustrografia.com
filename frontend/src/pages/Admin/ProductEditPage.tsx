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
import VariationCreateForm from "../../components/Admin/VariationCreateForm";
import UploadArtPrintField from "../../components/Admin/UploadArtPrintField";
import UploadMainImageField from "../../components/Admin/UploadMainImageField";
import NumberReviewsField from "../../components/Admin/NumberReviewsField";
import RatingField from "../../components/Admin/RatingField";
import NameField from "../../components/Admin/NameField";
import UploadCanvasField from "../../components/Admin/UploadCanvasField";
import UploadPosterField from "../../components/Admin/UploadPosterField";
import UploadPremiumField from "../../components/Admin/UploadPremiumField";
import DetailsFields from "../../components/Admin/DetailsFields";

import HeadingAccent from "../../components/primitives/HeadingAccent";
import PageHeading from "../../components/primitives/PageHeading";
import IconDivider from "../../components/primitives/IconDivider";
import { FaDragon } from "react-icons/fa";
import VariationsList from "../../components/Admin/VariationsList";
import Spinner from "../../components/Spinner";

const ProductEditScreen = () => {
  const { slug: productSlug } = useParams();
  const navigate = useNavigate();

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

  if (!productSlug) {
    return <div>No slug provided</div>;
  }
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productSlug);

  // console.log(product);

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
        {isLoading || loadingUpdate ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          /* col 1 */
          <div className=" mb-8 flex  h-full w-full flex-col gap-5 md:sticky md:top-8 md:mb-0 md:w-1/2 lg:w-3/12">
            <img className="" src={product?.images[0]} alt={product?.slug} />
            <div className="flex w-1/4 ">
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
            <div className="fixed bottom-0 left-0  z-10 flex w-full flex-col gap-1 bg-ivory dark:bg-eerie-black md:static md:gap-4 md:bg-none">
              <button
                onClick={handleSubmit}
                className={` h-8 w-full border border-red-magic bg-red-magic/60   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs `}
              >
                Save Changes
              </button>
              <Link to={"/admin/product-list"}>
                <button
                  className={`
                              
                            h-8 w-full border border-black-magic bg-black-magic   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:border-red-magic hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs`}
                >
                  Go Back
                </button>
              </Link>{" "}
              <Link to={`/shop/${product?.slug}`}>
                <button
                  className={`
                              
                            h-8 w-full border border-black-magic bg-black-magic   text-2xs font-semibold uppercase text-ivory  transition-colors duration-300 hover:border-red-magic hover:bg-red-magic/80 md:h-10 md:w-full md:text-xs`}
                >
                  Check Product
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* col 2 */}
        <div className="w-full  dark:text-ivory md:w-2/3 lg:w-9/12">
          <div
            className="mb-12 flex
     h-48 w-full flex-col items-center justify-center rounded-3xl bg-angel-dust shadow-hero dark:bg-angel-dark-dust"
          >
            <HeadingAccent>{product?.name}</HeadingAccent>
            <PageHeading>Update Product</PageHeading>
            <IconDivider>
              <FaDragon className="text-xl md:text-2xl" />
            </IconDivider>
          </div>

          {isLoading || loadingUpdate ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <Message variant="bad" message={getError(error as ApiError)} />
          ) : product ? (
            <div className="flex w-full flex-col justify-center  gap-10 xl:flex-row ">
              {/* col 2.1 */}
              <div className="flex w-full flex-col gap-10 xl:w-1/2">
                <Form.Root
                  className="flex w-full flex-col gap-10 "
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8">
                    <NameField
                      updateError={updateError}
                      name={name}
                      setName={setName}
                      setSlug={setSlug}
                    />
                  </div>
                  {/* <InputTextField /> */}
                  <DetailsFields setDetails={setDetails} details={details} />
                  <div className="flex flex-col gap-5 rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8 ">
                    <RatingField rating={rating} setRating={setRating} />
                    <NumberReviewsField rating={rating} setRating={setRating} />
                  </div>
                  <div className="flex flex-col gap-5 rounded-xl bg-angel-dust p-4 shadow-xl dark:bg-angel-space md:p-8">
                    <UploadMainImageField
                      images={images}
                      setImages={setImages}
                    />
                    <UploadArtPrintField
                      options={options}
                      setOptions={setOptions}
                    />
                    <UploadCanvasField
                      options={options}
                      setOptions={setOptions}
                    />
                    <UploadPosterField
                      options={options}
                      setOptions={setOptions}
                    />
                    <UploadPremiumField
                      options={options}
                      setOptions={setOptions}
                    />
                  </div>

                  <Form.Submit asChild>
                    <button className="hidden"></button>
                  </Form.Submit>
                </Form.Root>

                <StatisticsForm
                  statistics={statistics}
                  setStatistics={setStatistics}
                />
              </div>
              {/* col 2.2 */}
              <div className="flex w-full flex-col gap-10 xl:w-1/2">
                <VariationsList
                  variations={variations}
                  setVariations={setVariations}
                />

                <VariationCreateForm
                  variations={variations}
                  setVariations={setVariations}
                  slug={slug}
                  product={product}
                />

                <CategoriesForm
                  categories={categories}
                  setCategories={setCategories}
                />
                <TagsForm tags={tags} setTags={setTags} />
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
