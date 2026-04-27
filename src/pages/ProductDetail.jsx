
import{useParams} from "react-router-dom";
export const ProductDetail = () => {
  const params=useParams();
  console.log(params.id);

  return (
    <div className="component"> Product Detail - {params.id}  </div>
  )
}

