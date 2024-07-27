import React from 'react';
const CartItem = ({ item, updateQuantity, removeItem }) => {
  const totalPrice = item.price * (item.quantity || 1);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.images}
            className="img-fluid rounded-start"
            alt={item.title}
            style={{ width: '70%', height: 'auto' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>

            <h6 className="card-title">{item.description}</h6>
            <h6 className="card-text">
              ${totalPrice.toFixed(2)} ({item.quantity || 1} x ${item.price})
            </h6>
            <label htmlFor={`dropdown-${item.id}`}>Quantity</label>
            <select
              id={`dropdown-${item.id}`}
              value={item.quantity || 1}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={() => removeItem(item.id)}><img src="https://www.shutterstock.com/image-vector/trash-can-icon-symbol-delete-260nw-1454137346.jpg"className='image'></img></button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;