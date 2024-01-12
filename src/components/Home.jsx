import React from 'react'
import image from "../components/Images/bg1.jpg";
// import Product from './Products';
import About from './About';
import Products from './Products';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="sticky-container ">
        <div className='sticky-image'>
          <img src={image} alt="image" />
        </div>
        <div className="overlay ">
          <h1 className='overlay-content'>New Arrivals</h1>
          <div className="row">
            <div className="col-lg-12">
              <h1>20%  OFF SALE</h1>
              <h2 className='offer'>Jumbo Offers just for you this Winters.</h2>
              <div className="botton d-flex" style={{justifyContent:"center"}}>
                {/* <div className="row text-center"> */}
                  <div className="col-3 ">
              <Link to="/products" className='btn btn-primary s-button mt-5 rounded-0'>Shop Now</Link>
              </div>
              <div className="col-3 ">
              <Link to="/about" className='btn btn-dark s-button mt-5 rounded-0'> Learn More</Link>
              </div>
            {/* </div> */}
            </div>
            </div>
          </div>
        </div>
      </div>
      <Products/>
      <About/>
    </>
  );
};

export default Home;