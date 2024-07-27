import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/CartSlice';
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  const cart = useSelector(selectCart);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
   return (
    <div>
    <nav className="navbar">
        <div className="container-fluid">
           <h1>React Redux</h1>
            <form className="form-inline my-2 my-lg-0">
            <Link to='/cart'className="btn btn-outline-success cart-box"><FaCartShopping />&nbsp; ({cartItemCount}) </Link>
            </form>
        </div>
    </nav>
</div>
  );
};

export default Navbar;
