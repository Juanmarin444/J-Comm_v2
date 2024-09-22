import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';

// Actions
import { getProductsActions } from '../../../redux/products/productActions';

const Featured = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const {products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getProductsActions());
  }, [dispatch]);

  return (
    <div className="sm:pb-5 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14">
      <div className="pt-5 sm:py-5 md:py-8 lg:py-10 xl:py-12 2xl:py-14">
        <p className="font-Roboto font-bold text-hero-p text-center">Featured Items</p>
      </div>
      <div className='w-full flex flex-wrap justify-around'>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.slice(14,17).map((product) => (
            <FeaturedProduct
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
  );
}

export default Featured;
