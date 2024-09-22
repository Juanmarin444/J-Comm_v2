import { Link } from 'react-router-dom';

const FeaturedProduct = ({ title, price, imageUrl, productId, category }) => {
  return (
    <div className="w-1/5 my-5 mx-10 min-w-48 flex flex-wrap justify-around  font-Roboto text-center">
      <Link className="flex flex-col justify-between" to={`/product/${productId}`}>
        <div>
          <div>
            <img className="h-[450px]" src={imageUrl} alt={category}/>
          </div>
          <div className="text-[#cca869] text-page-p my-2 mx-0 max-h-20 overflow-y-hidden">
            <b>{title}</b>
          </div>
        </div>
        <div className="font-Rubik text-[#666666] text-lx">
          ${price}
        </div>
      </Link>
    </div>
  );
}

export default FeaturedProduct;
