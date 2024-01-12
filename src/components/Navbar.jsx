import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import {useSelector } from 'react-redux';

const Navbar = () => {
   const state= useSelector((state)=> state.handleCart)

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };
  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <Link class="navbar-brand" to="/"><i class="fa fa-snowflake-o" style={{ color: "beige", fontSize: "50px" }} aria-hidden="true"></i></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto gap-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/products"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about"><i class="fa fa-info-circle" aria-hidden="true"></i> About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact"><i class="fa fa-phone-square" aria-hidden="true"></i> Contact</Link>
              </li>

            </ul>

            <Link className="cart-link" to="/cart"><i className="fa fa-shopping-cart  fs-4" style={{ color: "white" }}></i></Link>         
            <span className="cart-count px-1 text-center me-2" style={{ color: "white", backgroundColor: "red", borderRadius: "50% 50%" }}>{state.length}</span>

            <form class="d-flex" role="search" onSubmit={(e) => e.preventDefault()} >
              <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-light search-btn text-light" type="submit"><i class="fa fa-search fs-5" aria-hidden="true"></i></button>
            </form>

            <span className='text fs-4 fw-normal text-light' onClick={handleLoginClick}>
              <i class="fa fa-user-circle-o fs-3 ms-5 " aria-hidden="true"></i> Log in</span>
            {isLoginOpen && <Login onClose={handleCloseLogin} />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;