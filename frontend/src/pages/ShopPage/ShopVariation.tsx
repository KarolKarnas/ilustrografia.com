import { TitleImages, Variation } from "../../types/Product";

interface Props {
  variation: Variation;
  images: string[];
  variationImage: TitleImages;
}

const ShopVariation = ({ variation, variationImage }: Props) => {
  return (
    <>
      {" "}
      <div>{variation.SKU}</div>;{" "}
      <img src={variationImage.images[0]} alt={variation.SKU} />
    </>
  );
};
export default ShopVariation;
