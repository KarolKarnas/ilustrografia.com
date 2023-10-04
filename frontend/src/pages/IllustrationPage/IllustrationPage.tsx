import { useParams } from "react-router-dom";
import _ from "lodash";
import {
  useGetProductDetailsQuery,
  useGetProductsByCategoryQuery,
} from "../../slices/productsApiSlice";
import Spinner from "../../components/Spinner";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import YouTubeEmbed from "../../components/YouTubeEmbed";

import { Product } from "../../types/Product";

import ProductGrid from "../../components/ProductGrid";

import SectionMain from "../../components/SectionMain";
import IllustrationsGrid from "../../components/IllustrationsGrid";
import MainTitlesWrapper from "../../components/MainTitlesWrapper";
import MainStrongText from "../../components/primitives/MainStrongText";
import IconDivider from "../../components/primitives/IconDivider";
import { FaDragon } from "react-icons/fa6";
import Button from "../../components/Button";
import ShopPage from "../ShopPage/ShopPage";

const IllustrationPage = () => {
  const params = useParams();
  const slug = params.slug;

  if (!slug) {
    return <div>No slug provided</div>;
  }
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(slug);

  const {
    data: categoryProducts,
    isLoading: isLoadingCategory,
    error: errorCategory,
  } = useGetProductsByCategoryQuery(`${product?.categories[0].slug}`);

  if (!product) {
    return <Spinner />;
  }

  const materialValues: string[] = _.uniq(
    _.map(product?.variations, "options.material"),
  );

  const sizeValues: string[] = _.uniq(
    _.map(product?.variations, "options.size"),
  );

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

  const firstLetter = product.details.story.charAt(0);
  const restOfLegend = product.details.story.slice(1);
 

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="flex w-11/12 flex-col gap-16">
      <div className="flex w-full flex-col justify-center sm:gap-10  md:flex-row xl:gap-20">
        <div className=" w-full md:w-5/12">
          <img
            className="shadow-hero md:sticky md:top-8"
            src={product?.images[0]}
            alt={product?.slug}
          />
        </div>
        <div className="w-full dark:text-ivory md:w-4/12">
          <h1 className=" mb-1 mt-16 font-fondamento text-3xl md:mt-0">
            The {product?.name}
          </h1>

          {product.details.latinName ? (
            <span className=" mb-1 font-fondamento text-xl">
              {product.details.latinName}
            </span>
          ) : null}

          {product.details.occurrence ? (
            <p className=" font-montserrat text-sm">
              <strong>Occurrence: </strong>
              {product.details.occurrence}
            </p>
          ) : null}

          {product.details.ytLink ? (
            <div className="my-10">
              <YouTubeEmbed mobileCenter embedId={product.details.ytLink} />
            </div>
          ) : null}

          <div className="my-6 flex justify-center">
            <IconDivider>
              <FaDragon />
            </IconDivider>
          </div>

          <p className="w-full">
          <span className="text-5xl text-ivory mr-2 lea  bg-red-magic float-left px-5 mt-2 py-2 font-fondamento">{firstLetter}</span>
           <span className="font-light">{restOfLegend}</span>
          </p>
          <div className="my-6 flex justify-center">
            <IconDivider>
              <FaDragon />
            </IconDivider>
          </div>

          <p className="mb-3 font-fondamento text-xl">
            What the {product.name} can do for You?
          </p>
          {product.statistics.length > 0 ? (
            <ul className="list-disc pl-8">
              {product.statistics.map((stat: string) => (
                <li className=" " key={stat}>
                  {stat}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-10 flex justify-center md:justify-start">
            <Button
              color="red"
              text={`${product.name} Products`}
              link={`/shop/${product.slug}`}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <IconDivider>
          <FaDragon />
        </IconDivider>
      </div>

      <SectionMain>
        <MainTitlesWrapper>
          <MainStrongText>{product.name} Products:</MainStrongText>
        </MainTitlesWrapper>

        <ProductGrid
          product={product}
          materialValues={materialValues}
          sizesByMaterial={sizesByMaterial}
        />
      </SectionMain>

      <SectionMain color="second">
        <MainStrongText>Creatures similar to {product.name}:</MainStrongText>
        <IllustrationsGrid products={categoryProducts} />

        {/* <Button
          text={`About ${
            categoryProducts && categoryProducts[0]?.categories[0]?.name
          }`}
          color={"black"}
          link={`/projects/${
            categoryProducts && categoryProducts[0]?.categories[0]?.slug
          }`}
        /> */}
      </SectionMain>
    </div>
  );
};
export default IllustrationPage;
