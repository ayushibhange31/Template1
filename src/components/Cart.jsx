// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action';

const Cart = () => {
  const handleCart = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const removeItem = (product,index) => {
    dispatch(delItem(product,index));
  };
  return (
    <>
      <h1 className='s-head mb-5 ' style={{ textAlign: "center" }}>Shopping Cart</h1>
      {handleCart.length === 0 ? (
        <h4 style={{ textAlign: "center" }}>Your cart is empty.</h4>
      ) : (
        handleCart.map((product,index) => (
          <div className='row  m-3' key={`${product.id}-${index.id}`}>
            <div className="col-md-6 m-0 text-center">
              <img src={product.image}  alt={product.title} className='p-image' 
                height="300px" width="300px" />
            </div>
            <div className="col-md-6 m-0">
              <h2>{product.title}</h2>
              <h3> ${product.price}</h3>
              <h3> Quantity: {`${product.qty}-${index.qty}`}</h3>
              <p className='p-desc px-2'>{product.description}</p>
              <button className='btn btn-dark' onClick={() => removeItem(product,index)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Cart;
