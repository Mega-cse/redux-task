import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { removeCartItem, updateCartItemQuantity } from '../../../features/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateCartItemQuantity({ id: itemId, quantity: newQuantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return total + itemTotal;
  }, 0);

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={handleUpdateQuantity}
          removeItem={handleRemoveItem}
        />
      ))}
      <div className='right-card'>
        <h3><u>Price Details:</u></h3>
        <div className='price-detail'>
          <h6>Subtotal:</h6>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className='price-detail'>
          <h6>Shipping:</h6>
          <span style={{ color: 'red' }}>Free</span>
        </div>
        <div className='price-detail'>
          <h6>Discount:</h6>
          <span>-$100.00</span>
        </div>
        <div className='price-detail'>
          <h6>Total:</h6>
          <span>${totalPrice - 100}</span>
        </div>
      </div>

    </div>
  );
};

export default Cart;