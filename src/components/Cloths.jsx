import React,{useState} from 'react'
import image from "../components/Images/slide.jpg";
import img2 from "../components/Images/slide2.jpg";
import img3 from "../components/Images/slide3.jpg";
import img4 from "../components/Images/slide4.jpg";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Cloths = () => {
    const [likedItems, setLikedItems] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const handleLikeToggle = (index) => {
        const newLikedItems = [...likedItems];
        if (newLikedItems.includes(index)) {
            // If already liked, remove from liked items
            newLikedItems.splice(newLikedItems.indexOf(index), 1);
        } else {
            // If not liked, add to liked items
            newLikedItems.push(index);
        }
        setLikedItems(newLikedItems);
    };


    return (
        <>
            <div className="container-accessories" >
                <div className="section-title mb-3 text-center">
                    <h5 style={{ color: "red" }}>Special Offers</h5>
                    <h3>Top Collections</h3>
                </div>
                <div className="cloths-content">
                    <div className="row m-0">
                        <div class="card-group" style={{ height: "100%" }}>
                        {[
                                { image: image, price: 30 , title: "Peach Balloon Sleeve Top and White Plazo"},
                                { image: img3, price: 40 , title:"Black Balloon Pant and Light Brown Coat" },
                                { image: img2, price: 25 , title:"OffWhite Plazo and LightPink Sweatshirt"},
                                { image: img4, price: 40 , title:"Navy Blue Denim Dress and OffWhite Coat"},
                            ].map((product,index) => (
                            <div class="card mx-1" key={index} >
                                <img src={product.image} class="card-img-top" alt="..." />
                                <div className="cart-textc overlay ">
                                    <ul className='sty text-light'>
                                        <li><i class="fa fa-shopping-cart fs-4 text-dark" aria-hidden="true" onClick={() => addProduct(product)}></i></li>
                                        <li>
                                                <i
                                                    className={`fa ${likedItems.includes(index) ? 'fa-heart' : 'fa-heart-o text-dark'} fs-4 py-2`}
                                                    aria-hidden="true"
                                                    onClick={() => handleLikeToggle(index)}
                                                ></i>
                                            </li>
                                        <li><i class="fa fa-search fs-4 text-dark" aria-hidden="true"></i></li>
                                    </ul>
                                </div>
                                <p className='text-center mb-0'><strong>${product.price}.00</strong></p>
                                <div className="star">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cloths     