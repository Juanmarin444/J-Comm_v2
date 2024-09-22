import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//actions
import { removeFromCart } from '../../redux/cart/cartSlice';
import { addToCartAction } from '../../redux/cart/cartActions';

const CartItem = (props) => {

  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(removeFromCart(props.productId));
  }

  const changeQtyHandler = (qty) => {
    dispatch(addToCartAction({id: props.productId, qty}))
  }

  return (
    <div className="xl:w-8/12 lg:w-10/12 p-4 mb-2 flex flex-col rounded-sm m-auto items-center md:flex-row">
      <div className='w-full md:w-4/6 flex flex-col items-center justify-start md:flex-row gap-4 font-Roboto'>  
        <img className="w-1/2 md:w-1/4" src={props.imageUrl} alt="temp stuff"/>
        <div className="flex flex-col gap-4 md:gap-0 items-center md:items-start text-center md:text-start text-page-p">
          <Link className="text-hero-p w-full" to={`/product/${props.productId}`}>{props.title}</Link>
          <button className="w-fit text-[#cca869] border-b border-[#fff] cursor-pointer transition-all duration-300 ease-out hover:border-[#cca869]" onClick={removeItemHandler}>Remove</button>
        </div> 
      </div>
      <div className="w-full md:w-2/6 flex flex-col px-4 items center text-page-p">
        <div className="flex items-center justify-between gap-4 font-bold">
          <div>
            <p>Each</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Total</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 text-page-p">
          <p>${props.price}</p>
          <select onChange={(event => {changeQtyHandler(event.target.value)})}>
            <option value={props.qty}>{props.qty}</option>
            {
              [...Array(props.countInStock).keys()].map(index => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))
            }
          </select>
          <p>{(props.price * props.qty).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
