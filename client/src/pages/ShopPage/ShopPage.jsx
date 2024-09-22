import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from '../../components/Product/Product';

// Actions
import { getProductsActions } from '../../redux/products/productActions';

const ShopPage = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);

    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(getProductsActions());
    }, [dispatch]);

    return (
        <div className="w-10/12 my-0 mx-auto pt-10">
            <div className="mb-10">
                <h1 className="font-Roboto font-bold text-page-h1 text-center">Shop</h1>
                <p className="font-Roboto font-bold text-page-p text-center">You deserve the best, and we deliver. Explore our curated selection of luxury jewelry, premium tech, and designer apparel. Whether you’re indulging or investing, our collection promises sophistication, quality, and style.</p>
                <div className='w-full flex flex-wrap justify-around'>
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            title={product.title}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
                </div>
            </div>
        </div>
    );
}

export default ShopPage;