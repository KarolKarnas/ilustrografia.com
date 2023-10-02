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

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="flex w-11/12 flex-col gap-16">
      <div className="flex flex-col md:flex-row w-full justify-center  sm:gap-10 xl:gap-20">
        <div className=" w-full md:w-5/12">
          <img
            className="shadow-hero md:sticky md:top-8"
            src={product?.images[0]}
            alt={product?.slug}
          />
        </div>
        <div className="w-full md:w-4/12 dark:text-ivory">
          <h1 className=" mb-1 mt-16 md:mt-0 font-fondamento text-3xl">The {product?.name}</h1>

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

          
          <div className="flex justify-center my-6">
            <IconDivider>
              <FaDragon />
            </IconDivider>
          </div>

          <p className="w-full whitespace-pre-line first-letter:bg-red-magic first-letter:px-5 first-letter:py-2 first-letter:font-fondamento first-letter:text-2xl first-letter:text-ivory first-line:leading-10">
            {product.details.story}
          </p>
          <div className="flex justify-center my-6">
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
         <div className="mt-10 flex justify-center md:justify-start"><Button color="red" text={`${product.name} Products`} link={`/shop/${product.slug}`}/></div>
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
