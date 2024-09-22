import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Components
import Button from '../../components/Button/Button'

// Actions
import { getProductDetailsActions } from '../../redux/products/productActions';
import { addToCartAction } from '../../redux/cart/cartActions'


const ProductPage = () => {
    
    const dispatch = useDispatch();

    const [ qty, setQty ] = useState(1)
    const { product, loading, error } = useSelector(state => state.getProductDetails);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetailsActions(id))
        }
    }, [dispatch, id, product])

    const addToCartHandler = () => {        
        dispatch(addToCartAction({id: product._id, qty}))
    }

    return (
        <div className="product-page-wrapper flex justify-center 2xl:py-16 xl:py-14 lg:py-10 md:py-9 sm:py-8 py-7 w-full">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
            <>
                <div className="product-page-container flex flex-col w-11/12 gap-8 sm:flex-row items-center">
                    <div className="product-page-image-container flex justify-center sm:w-1/2 w-full">
                        <img className="max-w-60" src={product.imageUrl} alt={product.title}/>
                    </div>
                    <div className="product-page-product-description-container font-Roboto sm:w-1/2 w-full">
                        <div className="product-page-title text-page-h1 mb-[30px]">
                            <b>
                                {product.title}
                            </b>
                        </div>
                        <div className="product-page-price text-page-p mb-[20px]">
                            <b>
                                From ${product.price}
                                <span style={{color:'grey', textDecoration:'line-through', marginLeft:'20px'}}>
                                    ${Number(product.price) * 2}
                                </span>
                            </b>
                        </div>
                        <div className="product-page-description lg:text-xl md:text-lg sm:text-base font-light">
                            <p>
                                {product.description}
                            </p>
                        </div>
                        <div className="add-to-cart-cta flex justify-around items-center">
                            <select className="py-5 px-6 rounded-lg" value={qty} onChange={(event) => {setQty(event.target.value)}}>
                            {
                                [...Array(product.countInStock).keys()].map(index => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                                ))
                            }

                            </select>
                            <Button text="Add To Cart" click={addToCartHandler} path='/cart'/>
                        </div>
                    </div>
                </div>
            </>
        )}
        </div>
    );
}

export default ProductPage;