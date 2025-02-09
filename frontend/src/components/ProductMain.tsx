import _ from "lodash";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

type ProductMainProps = {
  product: Product;
};

const ProductMain = ({ product }: ProductMainProps) => {
  const findLowestPrice = (product: Product) => {
    return _.minBy(product.variations, "price")?.price;
  };
  return (
    <div>
      <div className="m-2 bg-red-200">
        <h4 className="p-2 italic">{product.name}</h4>
        <Link to={`/shop/${product.slug}`}>
          <img
            className="transition duration-500 hover:scale-110 hover:cursor-pointer"
            src={product.images[0]}
            alt={`${product.slug}-${product.categories[0].slug}`}
          />
        </Link>
        <div className="flex justify-between p-2">
          <div>
            <Rating
              rating={product.rating.rating}
              numReviews={product.rating.numReviews}
            />
          </div>

          {
            <div>
              Prices start from:{" "}
              <span className="font-semibold">${findLowestPrice(product)}</span>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
export default ProductMain;
