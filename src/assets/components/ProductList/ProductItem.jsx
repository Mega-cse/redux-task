import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart,removeCartItem} from '../../../features/CartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isInCart = cartItems.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    if (isInCart) {
      dispatch(removeCartItem(product.id));
    } else {
      dispatch(addToCart({ product }));
    }
  };
  return (
    <div className="card h-100 py-5 ">
    <img src={product.images} className="card-img-top" alt={product.title} />
    <div className="card-body">
      <h4>{product.title}</h4>
      <h6>${product.price}</h6>
     <div style={{textAlign:'center'}}>
    <button onClick={handleAddToCart} className='btn btn-success cart-button'>
    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
      </div>
    </div>
  </div>
  );
};

export default ProductItem;
