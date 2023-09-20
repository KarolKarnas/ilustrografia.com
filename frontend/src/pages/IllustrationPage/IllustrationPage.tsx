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
  console.log(materialValues)

  const sizeValues = _.uniq(_.map(product?.variations, "options.size"));
  console.log(sizeValues)

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

  console.log(sizesByMaterial)


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
        <div className="w-4/12 ">
          <h1 className=" font-fondamento text-3xl">{product?.name}</h1>
          <YouTubeEmbed embedId="u8d6Pbykjgg" />
          {/* YTLINK */}
          <p className="w-full">
            In the heart of Warsaw resides a tale of ancient vengeance, kept
            alive by the enigmatic figure of Anna Bronkiewicz-Faltz, the last
            surviving basilisk. Centuries ago, Warsaw was a city filled with
            legends, and the Basilisk of Warsaw was one of its most sinister. It
            was said to have the power to kill with a single gaze and turn
            people into stone. Yet, in reality, basilisks were a humanoid race
            that settled in European cities. However, fear led to their
            downfall. Johan Faltz, a prosperous magnate, joined the hunt for the
            basilisk, leading to tragedy. His wife, Anna, survived and vowed
            revenge. Disguised as a beggar, she wandered the streets, focusing
            her anger on Krzywe Koło Street. Anna&apos;s revenge simmered
            beneath her beggarly facade. She sought to reclaim her family&apos;s
            wealth and make the descendants of the hunters pay. While her
            beggarly form was common, she could transform into her true basilisk
            shape when needed. Those who encountered her learned that offering
            gold coins could briefly engage her. The legend of Anna
            Bronkiewicz-Faltz, the last basilisk of Warsaw, endures—a tale of
            vengeance, the power of anger, and a city haunted by its history.
            Beware if you encounter her, for her grand revenge plan awaits the
            right moment to unfold.
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center rounded-xl bg-cool-pink px-8  py-16 dark:bg-dark-red  ">
      <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
        {materialValues.map((material, index) => (<ProductVariations key={index} product={product} material={material} size={sizesByMaterial[material][0]}/>))}

        </div>
      </div>
    </div>
  );
};
export default IllustrationPage;
