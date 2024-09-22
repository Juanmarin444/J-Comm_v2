import { Link } from 'react-router-dom';

const Product = (props) => {
  return(
    <div className="w-1/5 p-5 min-w-48 flex flex-wrap justify-around  font-Roboto text-center">
      <Link className="flex flex-col justify-between" to={`/product/${props.productId}`}>
      <div>
        <div>
          <img className="h-[300px]" src={props.imageUrl} alt={props.category}/>
        </div>
        {/* <div className="font-Roboto text-center w-full"> */}
          <div className="text-[#cca869] text-lg my-2 mx-0 max-h-14 overflow-y-hidden">
            <b>{props.title}</b>
          </div>
      </div>
          <div className="font-Rubik text-[#666666] text-lg">
            ${props.price}
          </div>
        {/* </div> */}
      </Link>
    </div>
  )
}

export default Product;
