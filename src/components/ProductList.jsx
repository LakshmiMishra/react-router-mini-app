
import { useSearchParams } from "react-router-dom"
export const ProductList = () => {
  const[searchParams]=useSearchParams();
  console.log(searchParams.get("category"));
  return (
    <div className="component">ProductList</div>
  )
}

