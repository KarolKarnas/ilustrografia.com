import { Link } from "react-router-dom";

type Props = {
  productName : string;
  categorySlug : string;
  categoryName : string;
}


const ProductBreadcrumbs = ({categorySlug, categoryName, productName} : Props) => {
  return (
    <p className=" text-zinc-300">
    <Link to={`/shop`} className=" text-xs hover:text-red-magic">
      Shop
    </Link>{" "}
    /{" "}
    <Link
      to={`/shop?category=${categorySlug}`}
      className=" text-xs hover:text-red-magic"
    >
      {categoryName}
    </Link>{" "}
    /{" "}
    <span
    
      className=" text-xs cursor-default"
    >
      {productName}
    </span>
  </p>
  )
}
export default ProductBreadcrumbs