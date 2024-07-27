
import React from 'react';
import { useDispatch } from 'react-redux';

import ProductItem from './ProductItem';
import { addToCart } from '../../../features/CartSlice';
const ProductList = ({products}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
     };
  return (
    
        <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
         {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart}/>
 
      ))}
      </div>
    </div>
  );
};

export default ProductList;
