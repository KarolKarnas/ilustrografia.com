import { useAppDispatch, useAppSelector } from "../../slices/reduxHooks";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import _ from "lodash";
import {
  MaterialOptionNoNameKeys,
  Product,
  SizeOptionNoNameKeys,
} from "../../types/Product";
import {
  useGetProductDetailsQuery,
  useCreateProductReviewMutation,
} from "../../slices/productsApiSlice";
import VariationDescription from "./VariationDescription";
import { Variation } from "../../types/Product";
import { addToCart } from "../../slices/cartSlice";
import VariationCharacteristics from "./VariationCharacteristics";
import { toast } from "react-toastify";
import Meta from "../../components/Meta";
import ToastLink from "../../components/ToastLink";
import Rating from "../../components/Rating";
import Spinner from "../../components/Spinner";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import Reviews from "./Reviews";
import SelectNumber from "./SelectNumber";
import ReviewForm from "./ReviewForm";


const ProductPage = () => {
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  // const [userInfo, setUserInfo] = useState<UserInfo>()
  const params = useParams();
  const slug = params.slug;

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [variation, setVariation] = useState<Variation>();

  // console.log(variation);
  if (!slug) {
    return <div>No slug provided</div>;
  }
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(slug);

  console.log(product?.reviews);

  const [createProductReview, { isLoading: loadingProductReview }] =
    useCreateProductReviewMutation();

  const { userInfo } = useAppSelector((state) => state.auth);

  const getVariation = (material: string, size: string) => {
    return _.find(product?.variations, { options: { material, size } });
  };

  useEffect(() => {
    if (!isLoading && searchParams && product) {
      const material = searchParams.get("material");
      const size = searchParams.get("size");
      if (material && size) {
        // console.log(material, size);
        const currentVariation = getVariation(material, size);
        setVariation(currentVariation);
      } else {
        setVariation(product.variations[0]);
      }
    }
  }, [isLoading, product]);

  useEffect(() => {
    if (variation && product) {
      // Check if variation and product are defined
      setSearchParams({
        material: variation.options.material,
        size: variation.options.size,
      });
    }
  }, [variation, product]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   <div>{getError(error as ApiError)}</div>;
  // }

  if (!product) {
    return <div>Loading...</div>;
  }

  // console.log(product);
  // console.log(variation);
  // console.log(qty);

  const materialValues = _.uniq(_.map(product.variations, "options.material"));

  const sizeValues = _.uniq(_.map(product.variations, "options.size"));

  const getSizesForMaterialFromProduct = (
    product: Product,
    material: string,
  ) => {
    const sizes = _.uniq(
      product.variations
        .filter((variation) => variation.options.material === material)
        .map((variation) => variation.options.size),
    );
    return sizes;
  };

  const sizesByMaterial: { [key: string]: string[] } = {};

  materialValues.forEach((material: string) => {
    sizesByMaterial[`${material}`] = getSizesForMaterialFromProduct(
      product,
      material,
    );
  });

  const sizesByMaterialTitle: { [key: string]: string[] } = {};

  for (const property in sizesByMaterial) {
    const names = sizesByMaterial[property];
    const titles = names.map(
      (name) => product.options.size[name as SizeOptionNoNameKeys].title,
    );
    sizesByMaterialTitle[property] = titles;
  }

  const materialTitle = materialValues.map(
    (name) => product.options.material[name as MaterialOptionNoNameKeys].title,
  );
  //TITLE_TO_NAME_MATERIAL
  const titleToNameMaterial: { [key: string]: string } = {};

  materialTitle.forEach(
    (title, index) => (titleToNameMaterial[title] = materialValues[index]),
  );

  const sizeTitle = sizeValues.map(
    (name) => product.options.size[name as SizeOptionNoNameKeys].title,
  );

  //TITLE_TO_NAME_SIZE
  const titleToNameSize: { [key: string]: string } = {};

  sizeTitle.forEach(
    (title, index) => (titleToNameSize[title] = sizeValues[index]),
  );

  // console.log(titleToNameSize)

  const handleChangeSize = (e: SyntheticEvent) => {
    const targetSize = e.currentTarget.textContent;
    if (targetSize) {
      const shortSizeName = titleToNameSize[targetSize];
      if (variation) {
        const currentVariation = getVariation(
          variation?.options.material,
          shortSizeName,
        );
        setVariation(currentVariation);
      }
    }
  };

  const handleChangeMaterial = (e: SyntheticEvent) => {
    const targetMaterial = e.currentTarget.textContent;
    if (targetMaterial) {
      const shortMaterialName = titleToNameMaterial[targetMaterial];
      // if same size exist

      if (variation) {
        const theSame = getVariation(
          shortMaterialName,
          variation?.options.size,
        );

        if (theSame) {
          setVariation(theSame);
        } else {
          const cheapestOfMaterialVariation = product.variations.find(
            (variation: Variation) =>
              variation.options.material === shortMaterialName,
          );
          setVariation(cheapestOfMaterialVariation);
        }
      }
    }
  };

  const addToCartHandler = () => {
    if (variation) {
      const pathnameWithQuery =
        window.location.pathname + window.location.search;
      const variationName = `${product.name} ${
        product.options.material[
          variation.options.material as MaterialOptionNoNameKeys
        ].title
      } ${
        product.options.size[variation.options.size as SizeOptionNoNameKeys]
          .title
      }`;
      dispatch(
        addToCart({
          ...variation,
          _id: variation._id!,
          qty,
          image:
            product.options.material[
              variation.options.material as MaterialOptionNoNameKeys
            ].images[0],
          variationName,
          pathnameWithQuery,
        }),
      );
      toast.success(<ToastLink product={variationName} />);
      // navigate('/cart');
    }
  };

  const handleSubmitReview = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await createProductReview({
        slug: product.slug,
        comment: reviewComment,
        rating: reviewRating,
      }).unwrap();
      toast.success("Review created successfully");
      setReviewComment("");
      refetch();
    } catch (err) {
      toast.error(getError(err as ApiError));
    }
  };

  if (variation) {
    return isLoading ? (
      <Spinner />
    ) : error ? (
      <div>{getError(error as ApiError)}</div>
    ) : (
      <>
      <Meta title={`${product.name} · ${product.categories[0].name} · Product`} />
      <div className="flex w-11/12 flex-col justify-center gap-16 md:flex-row">
        <div className="w-full md:w-4/12 ">
          <img
            className="shadow-hero md:sticky md:top-8 "
            src={
              variation &&
              product.options.material[
                variation.options.material as MaterialOptionNoNameKeys
              ].images[0]
            }
            alt={`${product.slug}-${variation.options.material}`}
          />
        M</div>
        <div className="w-full md:w-4/12">
          {/* BREADCRUMBS */}
          <ProductBreadcrumbs
            categoryName={product.categories[0].name}
            categorySlug={product.categories[0].slug}
            productName={product.name}
          />

          <h1 className=" font-fondamento text-3xl dark:text-ivory">
            {product.name}{" "}
            <span className="text-xl">
              {
                product.options.material[
                  variation.options.material as MaterialOptionNoNameKeys
                ].title
              }{" "}
              {
                product.options.size[
                  variation.options.size as SizeOptionNoNameKeys
                ].title
              }
            </span>
          </h1>
          {/* RATING */}

          <Rating
            rating={product.rating.rating}
            numReviews={product.rating.numReviews}
          />
          <div className="mt-5 flex flex-col gap-1">
            {/* SIZES */}
            <h3 className="font-montserrat text-xs font-bold uppercase dark:text-ivory">
              Sizes:
            </h3>
            <div className=" flex items-center gap-1">
              {sizesByMaterialTitle[variation.options.material].map(
                (option) => (
                  <button
                    onClick={handleChangeSize}
                    key={option}
                    className={`${
                      option ===
                      product.options.size[
                        variation.options.size as SizeOptionNoNameKeys
                      ].title
                        ? "border-red-magic bg-red-magic/60 text-ivory shadow-sm "
                        : "dark:border-ivory/80 dark:text-ivory  "
                    } border border-black p-1 text-xs transition hover:border-red-magic hover:bg-red-magic hover:text-white dark:hover:border-red-magic`}
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
            {/* <hr className=" mx-auto my-3 h-px"></hr> */}

            {/* Materials */}
            <h3 className="font-montserrat text-xs font-bold uppercase dark:text-ivory">
              Materials:
            </h3>
            <div className="flex items-center gap-1">
              {materialTitle.map((option) => {
                return (
                  <button
                    onClick={handleChangeMaterial}
                    key={option}
                    className={`${
                      option ===
                      product.options.material[
                        variation.options.material as MaterialOptionNoNameKeys
                      ].title
                        ? "border-red-magic bg-red-magic/60 text-ivory shadow-sm "
                        : "dark:border-ivory/80 dark:text-ivory  "
                    } border border-black p-1 text-xs transition hover:border-red-magic hover:bg-red-magic/80 hover:text-white dark:hover:border-red-magic`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 flex gap-10">
            <div className=" font-montserrat text-black-magic dark:text-ivory">
              <span className="mr-2 text-xs  uppercase">Price:</span>
              <strong className=" text-2xl font-light">
                ${variation?.price}
              </strong>
            </div>
          </div>

          <hr className=" mx-auto my-3 h-px"></hr>

          <div className="flex h-10 items-center gap-5">
            <SelectNumber
              selectNumber={variation.countInStock}
              onChange={setQty}
              defaultValue="1"
            />

            <button
              onClick={addToCartHandler}
              className={`${
                variation?.countInStock === 0
                  ? "bg-zinc-100 text-zinc-300"
                  : "border border-black-magic bg-black-magic   text-ivory hover:border-red-magic hover:bg-red-magic dark:border-red-magic dark:bg-red-magic/60 dark:hover:bg-red-magic/80"
              }  h-full  w-full text-xs font-semibold uppercase transition-colors duration-300 md:w-auto md:px-32`}
              disabled={variation?.countInStock === 0}
            >
              {variation.countInStock > 0 ? "Add to Cart" : "Out Of Stock"}
            </button>
          </div>
          <div className=" mb-3 mt-10 font-montserrat text-black-magic dark:text-ivory">
            <h4 className=" mb-2 text-sm font-semibold">
              By buying {product.name} on the wall, you gain:{" "}
            </h4>
            {product.statistics.length > 0 ? (
              <ul className="list-disc pl-8 text-sm">
                {product.statistics.map((stat: string) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <hr className=" mx-auto my-5 h-px "></hr>

          <div className="font-montserrat text-sm text-black-magic dark:text-ivory">
            <VariationDescription
              variationMaterial={variation.options.material}
            />{" "}
          </div>
          <hr className=" mx-auto my-5 h-px"></hr>

          <div className=" font-montserrat text-black-magic dark:text-ivory">
            <h4 className=" mb-2 text-sm font-semibold">
              {
                product.options.material[
                  variation.options.material as MaterialOptionNoNameKeys
                ].title
              }{" "}
              characteristics:
            </h4>
            <VariationCharacteristics
              variationMaterial={variation.options.material}
            />
          </div>

          <hr className=" mx-auto my-5 h-px"></hr>

          <div className="font-montserrat text-sm text-black-magic dark:text-ivory">
            <h3 className="font-semibold">Reviews:</h3>
            {product.reviews && product.reviews.length > 0 ? (
              <Reviews reviews={product.reviews} />
            ) : (
              <span className="">
                There are no reviews yet, write the first one.
              </span>
            )}
            {userInfo ? (
              <ReviewForm
                handleSubmitReview={handleSubmitReview}
                setReviewRating={setReviewRating}
                setReviewComment={setReviewComment}
                reviewComment={reviewComment}
              />
            ) : (
              <div>
                To write a review you must{" "}
                <Link
                  className="text-red-magic underline hover:text-black-magic"
                  to={"/login"}
                >
                  log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      </>);
  } else {
    return <div>No variation</div>;
  }
};
export default ProductPage;
