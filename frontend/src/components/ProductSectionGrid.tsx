import { Product } from "../types/Product";
import ProductVariations from "./ProductVariations";

type Props = {
  product?: Product;
  materialValues?: string[];
  sizesByMaterial?: { [key: string]: string[] };
};

const ProductsSectionGrid = ({
  product,
  materialValues,
  sizesByMaterial,
}: Props) => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-xl bg-moon-dust px-2 py-24 shadow-hero dark:bg-angel-space md:px-24 lg:px-16 xl:px-10 2xl:px-16  ">
      <div className="mb-8 flex w-1/2 flex-col items-center">

        <h3 className=" my-  mb-4 text-center font-cormorant-infant  text-xl font-semibold italic text-eerie-black drop-shadow-red-heading dark:text-ivory dark:drop-shadow-xl md:text-5xl ">
       {product?.name} products:
        </h3>
      </div>

      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4 ">
        {materialValues && product && sizesByMaterial
          ? materialValues.map((material, index) => (
              <ProductVariations
                key={index}
                product={product}
                material={material}
                size={sizesByMaterial[material][0]}
              />
            ))
          : null}
      </div>
    </div>
  );
};
export default ProductsSectionGrid;
