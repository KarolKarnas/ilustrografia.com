import { TitleImages, Variation } from "../../types/Product";

interface ShopVariationProps {
  variation: Variation;
  images: string[];
  variationImage: TitleImages;
}

const ShopVariation = ({ variation, variationImage }: ShopVariationProps) => {
  return (
    <>
      {" "}
      <div>{variation.SKU}</div>;{" "}
      <img src={variationImage.images[0]} alt={variation.SKU} />
    </>
  );
};
export default ShopVariation;
