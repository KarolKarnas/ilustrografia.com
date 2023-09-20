import { useParams } from "react-router-dom";
import _ from "lodash";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
import Spinner from "../../components/Spinner";
import { getError } from "../../utils/utils";
import { ApiError } from "../../types/ApiError";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import ProductVariations from "../../components/ProductVariations";
import { Product } from "../../types/Product";

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

  // console.log(product?.variations)

  if (!product) {
    return <Spinner />;
  }

  const materialValues = _.uniq(_.map(product?.variations, "options.material"));
  console.log(materialValues);

  const sizeValues = _.uniq(_.map(product?.variations, "options.size"));
  console.log(sizeValues);

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

  console.log(sizesByMaterial);

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <div>{getError(error as ApiError)}</div>
  ) : (
    <div className="flex w-11/12 flex-col">
      <div className="my-5 flex w-full justify-center gap-20">
        <div className="n w-5/12">
          <img src={product?.images[0]} alt={product?.slug} />
        </div>
        <div className="w-4/12">
          <h1 className=" font-fondamento text-3xl mb-1">{product?.name}</h1>

          {product.details.latinName ? (
            <span className=" font-fondamento text-xl mb-1">
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
              <YouTubeEmbed embedId={product.details.ytLink} />
            </div>
          ) : null}
          <p className="w-full">{product.details.story}</p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center rounded-xl bg-cool-pink px-8  py-16 dark:bg-dark-red  ">
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {materialValues.map((material, index) => (
            <ProductVariations
              key={index}
              product={product}
              material={material}
              size={sizesByMaterial[material][0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default IllustrationPage;
