import { VariationOptionalId } from "../../types/Product";
import VariationEditForm from "./VariationEditForm";

type Props = {
  variations: VariationOptionalId[];
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
};

const VariationsList = ({ variations, setVariations }: Props) => {
  return (
    <div className="rounded-xl bg-angel-dust dark:bg-angel-space p-4 md:p-8 shadow-xl">
      <h3 className="form-label">Edit Variation</h3>
      {/* <span className="mb-2 font-montserrat text-xs font-semibold italic text-black-magic dark:text-ivory">Delete / Sku / Price / Count In Stock</span> */}
    <div className="flex flex-col gap-5 mt-5">
      {variations?.map((variation, index) => (
        <div key={index} className="">

              <VariationEditForm
                price={variation.price}
                countInStock={variation.countInStock}
                setVariations={setVariations}
                sku={variation.SKU}
                index={index}
                variations={variations}
              />
            </div>
      ))}
    </div>
    </div>
  );
};
export default VariationsList;
