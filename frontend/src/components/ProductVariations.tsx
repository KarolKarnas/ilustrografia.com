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
  variationNum?: number;
  material?: string;
  size?: string;
};

const ProductPage = ({ product, variationNum, material, size }: Props) => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState<string>(`/shop/${product.slug}`);

  const [qty, setQty] = useState(1);
  const [variation, setVariation] = useState<Variation>();

  // console.log(variation);

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
      // if (variationNum) {
      //   setVariation(product.variations[variationNum]);
      // } else {

      // }
      if (material && size) {
        // console.log(material, size);
        const currentVariation = getVariation(material, size);
        setVariation(currentVariation);
      } else {
        setVariation(product.variations[0]);
      }
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
      <div className="shadow-small-hero flex flex-col items-center justify-center rounded-xl bg-ivory dark:bg-fair-space hover:scale-110 hover:translate-y-[-1rem] transition-transform duration-500">
        <div className="relative h-full w-full">
          <div className="absolute top-5 flex w-full flex-col items-center justify-center">
            <h1 className=" font-cormorant-infant text-xl font-semibold italic drop-shadow-md">
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
            {/* <Rating
              rating={product.rating.rating}
              numReviews={product.rating.numReviews}
            /> */}
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
              alt={`${product.slug}-${variation.options.material}`}
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
                        ? "border-red-magic bg-red-magic bg-opacity-90 text-white shadow-sm "
                        : ""
                    }font-light hover:border-red-magic hover:bg-red-magic border border-black p-0.5 md:p-1 text-xs transition hover:bg-opacity-70 hover:text-white`}
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
                        ? "border-red-magic bg-red-magic bg-opacity-90 text-white shadow-sm "
                        : ""
                    }font-light hover:border-red-magic hover:bg-red-magic border border-black p-0.5 md:p-1 text-xs transition hover:bg-opacity-70 hover:text-white`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full pb-5 pt-2">
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <div className=" font-montserrat">
              <span className="mr-2 text-xs  uppercase">Price:</span>
              <strong className=" text-2xl font-light">
                ${variation?.price * qty}
              </strong>
            </div>

            <button
              onClick={addToCartHandler}
              className={`${
                variation?.countInStock === 0
                  ? "bg-zinc-100 text-zinc-300"
                  : "bg-black-magic hover:bg-red-magic text-ivory"
              }   px-16  py-2 text-xs font-semibold uppercase transition-colors duration-300`}
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

{
  /* <div>Price ${variation?.price}</div> */
}
{
  /* select quantity */
}
{
  /* <div className="flex gap-2">
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
            </div> */
}

{
  /* 
          <div className="flex w-full justify-around">
            <Link to={url}>
              <button
                className={` my-2 bg-dark-red px-16  py-1 text-white  hover:bg-red-200`}
              >
                Details
              </button>
            </Link>

      
          </div> */
}
