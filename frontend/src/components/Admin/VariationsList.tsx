import { VariationOptionalId } from "../../types/Product";
import VariationEditForm from "./VariationEditForm";

type VariationsListProps = {
  variations: VariationOptionalId[];
  setVariations: React.Dispatch<React.SetStateAction<VariationOptionalId[]>>;
};

const VariationsList = ({ variations, setVariations }: VariationsListProps) => {
  return (
    <div className="rounded-xl bg-angel-dust dark:bg-angel-space p-4 md:p-8 shadow-xl">
      <h3 className="form-label">Edit Variation</h3>
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
