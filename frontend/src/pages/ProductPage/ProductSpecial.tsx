import { useGetProductSpecialDetailsQuery } from "../../slices/productsApiSlice"

const ProductSpecial = () => {


  const { data, isLoading, refetch, error } = useGetProductSpecialDetailsQuery('basilisk');

console.log(data
  )

  console.log(data?.images)
  return (
    <div>ProductSpecial</div>
  )
}
export default ProductSpecial