import { useAppDispatch } from "../slices/reduxHooks";
import { SyntheticEvent, useEffect, useState } from "react";
import _ from "lodash";
import {
  MaterialOptionNoNameKeys,
  Product,
  SizeOptionNoNameKeys,
} from "../types/Product";
import { Variation } from "../types/Product";
import { addToCart } from "../slices/cartSlice";

import { toast } from "react-toastify";
import ToastLink from "../components/ToastLink";

import Rating from "../components/Rating";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductPage = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState<string>(`/shop/${product.slug}`);

  const [qty, setQty] = useState(1);
  const [variation, setVariation] = useState<Variation>();

  console.log(variation);

  const getVariation = (material: string, size: string) => {
    return _.find(product?.variations, { options: { material, size } });
  };

  useEffect(() => {
    setUrl(
      `/shop/${product.slug}?material=${variation?.options.material}&size=${variation?.options.size}`,
    );
  }, [variation]);

  useEffect(() => {
    if (product) {
      setVariation(product.variations[0]);
      setUrl(
        `/shop/${product.slug}?material=${variation?.options.material}&size=${variation?.options.size}`,
      );
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
      // const pathnameWithQuery =
      //   window.location.pathname + window.location.search;
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
          pathnameWithQuery: url,
        }),
      );
      toast.success(<ToastLink product={variationName} />);
      // navigate('/cart');
    }
  };

  if (variation) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-red-100 shadow-xl dark:bg-fair-space">
        <div className="relative h-full w-full">
          <div className="absolute top-5 flex w-full flex-col items-center justify-center">
            <h1 className=" font-fondamento text-xl drop-shadow-md">
              {product.name}{" "}
              <span className="text-sm">
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
          </div>
        </div>

        <div className="w-full">
          <Link to={url}>
            <img
              className=" rounded-t-lg"
              src={
                variation &&
                product.options.material[
                  variation.options.material as MaterialOptionNoNameKeys
                ].images[0]
              }
              alt={product.slug}
            />
          </Link>
        </div>

        {/* SIZES */}

        <div className="relative h-full w-full">
          <div className="absolute bottom-2 flex w-full flex-col items-center justify-center gap-y-2">
            <div className="flex gap-1">
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
                        ? "border-red-400 bg-red-200 text-white "
                        : ""
                    }font-light border border-black p-1 text-2xs hover:border-red-400 hover:bg-red-200 hover:text-white`}
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
            {/* Materials */}
            <div className="flex gap-1">
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
                        ? "border-red-400 bg-red-200 text-white "
                        : ""
                    }font-light border border-black  p-1 text-xs hover:border-red-400 hover:bg-red-200 hover:text-white`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-3 w-full">
          <div className="flex w-full justify-around">
            {/* <div>Price ${variation?.price}</div> */}
            {/* select quantity */}
            <div className="flex gap-2">
              <div>
                {variation.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </div>
              <select
                className=" px-5"
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {Array.from({ length: variation.countInStock }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              Price:{" "}
              <strong className=" text-lg">${variation?.price * qty}</strong>
            </div>
          </div>
          <div className="flex w-full justify-around">
            <Link to={url}>
              <button
                className={` my-2 bg-dark-red px-16  py-1 text-white  hover:bg-red-200`}
              >
                Details
              </button>
            </Link>

            <button
              onClick={addToCartHandler}
              className={`${
                variation?.countInStock === 0
                  ? "bg-zinc-100 text-zinc-300"
                  : "bg-outer-space text-white hover:bg-red-200"
              }   my-2 px-10  py-`}
              disabled={variation?.countInStock === 0}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No variation</div>;
  }
};
export default ProductPage;
