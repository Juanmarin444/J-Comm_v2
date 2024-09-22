import { useSelector } from 'react-redux'

// Components
import CartItem from '../../components/CartItem/CartItem';


const CartPage = () => {

  const { cartItems } = useSelector(state => state.cart)  

  let total = 0;

  for(let i = 0; i < cartItems.length; i++) {
    total += (cartItems[i].price * cartItems[i].qty);
  }

  return (
    <div className = "flex flex-col items-center">
      <h1 className="text-page-h1 font-bold font-Roboto">Your Cart</h1>
      <div className="w-11/12 my-10 border-b-[1px] border-[#b3b3b3]"></div>
      <>
        {
          cartItems.map(item => (
            <CartItem
              key={item.id}
              productId={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              countInStock={item.countInStock}
              qty={item.qty}
              item={item}
            />
          ))
        }
      </>
      <div className="w-11/12 p-4 flex justify-between items-center my-10 border-t-[1px] border-[#b3b3b3] font-Roboto font-bold text-hero-p">
        <p>Total</p>
        <p>{total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      </div>
    </div>
  );
}


export default CartPage;
