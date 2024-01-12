import React, { useState, useEffect } from 'react';
import myImage from "../components/Images/c1.jpg";
import myImage2 from "../components/Images/c2.jpg";
import myImage3 from "../components/Images/c3.jpg";
import card1 from "../components/Images/p1.png";
import card2 from "../components/Images/p2.png";
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Button } from 'bootstrap';

const Products = () => {
   
  useEffect(() => {
    AOS.init({ duration: 2000 });   
}, [])

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(" https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row gap-5">
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("jewelery")} style={{ color: "white" }}>Everything</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("men's clothing")} style={{ color: "white" }}>Men's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("women's clothing")} style={{ color: "white" }}>Women's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("jewelery")} style={{ color: "white" }}>Jwellery</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("makeup")} style={{ color: "white" }}>MakeUp</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" style={{ color: "white" }}>Footwear</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gap-5">
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => setFilter(data)} style={{ color: "white" }}>Everything</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("men's clothing")} style={{ color: "white" }}>Men's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("women's clothing")} style={{ color: "white" }}>Women's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("jewelery")} style={{ color: "white" }}>Jwellery</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("makeup")} style={{ color: "white" }}>MakeUp</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" style={{ color: "white" }}>Footwear</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row gap-5">
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => setFilter(data)} style={{ color: "white" }}>Everything</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("men's clothing")} style={{ color: "white" }}>Men's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("women's clothing")} style={{ color: "white" }}>Women's</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("jewelery")} style={{ color: "white" }}>Jwellery</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" onClick={() => filterProduct("makeup")} style={{ color: "white" }}>MakeUp</button>
              </div>
              <div className="p-head col" style={{ backgroundColor: "black", textAlign: "center" }}>
                <button className="btn" style={{ color: "white" }}>Footwear</button>
              </div>
            </div>
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 pt-3">

                <div class="card h-100 text-center p-4" key={product.id} >
                  <img src={product.image} class="card-img-top" alt={product.title} height="230px" />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0, 12)}....</h5>
                    <p class="card-text fw-bold text-center lead">${product.price}</p>
                    <div className="row justify-content-center">
                      <div className="col-8">
                        <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="for-container">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="lining">
            <div className="section-title mb-3 text-center">
              <h3>COLLECTION</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="collection-item" >
                  <div class="thumb">
                    <img src={card1} style={{ justifyContent: "center"}} alt="" width="100%" height="100%" />
                    </div>
                  <div class="thumb-content1">
                    <h2 className='Accessories' style={{ color: 'black' }}>ACCESSORIES</h2>
                    <div class="btn-wrapper stone-go-top">
                      <Link to="/accessories" className='btn btn-light' >SHOP NOW <i class="fa fa-arrow-circle-o-right fs-4" style={{ color: "grey" }} aria-hidden="true"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="collection-item" >
                  <div class="thumb">
                    <img src={card2} alt="" width="100%" height="100%" />
                  </div>
                  <div class="thumb-content2">
                    <h2 className='Accessories' style={{ color: 'black' }}>FASHION CLOTHING</h2>
                    <div class="btn-wrapper stone-go-top">
                      <Link to="/cloths" className='btn btn-light'>SHOP NOW <i class="fa fa-arrow-circle-o-right fs-4"   style={{ color: "grey" }} aria-hidden="true"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row m-0">
              <h3 className='product-head animate__pulse mt-2 pb-2 '>SnowShop Brings You Latest Collections</h3>
              <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
              </div>
            </div>
          </div>
          <div className="card-content pt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="product-card1 card">
                  <img src={myImage} className=" offer-card card-img-top" data-aos="zoom-in" alt="card1" />
                  <div className="card-body">
                    <h5 className="card-title">Men's & Women's Clothes</h5>
                    <p className="card-text">They have a good water resistance, consist of multiple layers to protect and insulate against low temperatures.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={myImage2} className="card-img-top" data-aos="zoom-in" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Warm Footwears</h5>
                    <p className="card-text">Winter boots are insulated with wool or fur to keep the feet warm. Most winter boots also keep people's feet dry.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={myImage3} className="card-img-top" data-aos="zoom-in" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Makeup and Cosmetics</h5>
                    <p className="card-text">In winter, our skin is exposed to low temperatures and harsh winds that wick moisture from the epidermis.New products for you. </p>
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

export default Products