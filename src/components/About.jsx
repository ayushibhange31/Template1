import React, { useEffect } from 'react'
import myImage from '../components/Images/card1.jpg';
import "aos/dist/aos.css";
import Aos from 'aos';


const About = () => {
  useEffect(()=>{
     Aos.init({duration:2000});
  },[])
  return (
    <>
      {/* <div className="container-fluid"> */}
      <div className='for-about '>
        <div className='for-about2'>
          <h1 className='about-heading text-center fw-bold' style={{fontFamily:"serif"}}> Information About Us</h1>
          <p className='about-head text-center'>--------SnowStore Gives You Warm--------</p>
          <div className="row m-0 d-flex">
            <div className="col-lg-6 col-sm-6 card1 p-4">
              <img src={myImage} class="card-img-top" data-aos="slide-right" style={{boxShadow:"5px 5px 10px rgba(0, 0, 0, 0.5)"}} alt="..." />
            </div>

            <div className="col-lg-5 col-sm-5 card2 ps-5 pt-5">
              <h1 className='about-heading1'> About Us</h1>

              <p className='about-head fs-5'>Welcome to <strong>SnowStore</strong>, where fashion meets passion!</p>
              <h1 className='about-head'>Our Story</h1>
              <p className='about-head' style={{textAlign:"justify"}}>At <strong>SnowStore</strong>, we believe that clothing is not just about covering your body; it's a form of self-expression, a way to showcase your unique style to the world. Our journey began in [Year] with a vision to curate a collection that blends
                trend-setting fashion with affordability, catering to diverse tastes and lifestyles.</p>
              <h1 className='about-head'>Our Mission</h1>
              <p className='about-head fs-5 fw-bold'>Empowering Your Style Journey</p>
              <p className='about-head' style={{textAlign:"justify"}}>Our mission is to empower individuals to embrace their individuality through fashion. We strive to provide a carefully curated selection of clothing that transcends trends, allowing you to create a style that's truly your own.</p>
            </div>

            <div className="key-feature-content mt-5" style={{border: "5px solid palevioletred"}}>
              <div className='key-feature-content1' style={{border: "2px solid gainsboro"}}>
              <div className="section-title mb-3 text-center">
              <h3>KEY FEATURES</h3>
            </div>
                <p className='about-heading text-center'>Creating a beautiful contemporary store has never been this easy. These features hand you all the power & help you build your site without effort.</p>
                <div className="row d-flex px-5">
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-cart-arrow-down fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">CART SHOP </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-credit-card-alt fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">DEBIT CARD</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-envelope-o fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">MAIL HERE</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-phone-square fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">CONTACT</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex px-5">
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-google-plus fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">GOOGLE +</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-facebook-square fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">FACEBOOK</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem" }}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-twitter-square fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">TWITTER</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card text-bg-light text-center mb-3" style={{ maxWidth: "18rem"}}>
                      <div class="card-header" style={{color:"palevioletred"}}><i class="fa fa-instagram fs-1" aria-hidden="true"></i></div>
                      <div class="card-body">
                        <h5 class="card-title">INSTGRAM</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About