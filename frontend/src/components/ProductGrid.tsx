import { Product } from "../types/Product";
import ProductVariations from "./ProductVariations";

type ProductGridProps = {
  product: Product;
  materialValues?: string[];
  sizesByMaterial?: { [key: string]: string[] };
  colNum?: number;
  aspectRatio?: string;
  hideVariations?: boolean;
};

const ProductGrid = ({
  product,
  materialValues,
  sizesByMaterial,
  colNum,
  hideVariations,
}: ProductGridProps) => {
  return (
    <div
      className={`${
        colNum === 3
          ? "xl:grid-cols-3"
          : colNum === 5
          ? "xl:grid-cols-5"
          : "xl:grid-cols-4"
      } grid grid-cols-1 gap-8 lg:grid-cols-2 `}
    >
      {materialValues && product && sizesByMaterial
        ? materialValues.map((material, index) => (
            <ProductVariations
              key={index}
              product={product}
              material={material}
              size={sizesByMaterial[material][0]}
              hideVariations={hideVariations}
            />
          ))
        : null}
    </div>
  );
};
export default ProductGrid;
