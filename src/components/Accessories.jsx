import React,{useState} from 'react'
// import image from "../components/Images/a1cp.jpg";
// import img2 from "../components/Images/a2.jpg";
// import img3 from "../components/Images/a3.jpg";
// import img4 from "../components/Images/a4.jpg";
import images from "../components/Images";
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Accessories = () => {
    const [likedItems, setLikedItems] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product,index) => {
        dispatch(addCart(product,index));
    }

    const image = images.a1cp;
    const img2 = images.a2;
    const img3 = images.a3;
    const img4 = images.a4;

    const handleLikeToggle = (product,index) => {
        const newLikedItems = [...likedItems];
        if (newLikedItems.includes(product,index)) {
            // If already liked, remove from liked items
            newLikedItems.splice(newLikedItems.indexOf(product,index), 1);
        } else {
            // If not liked, add to liked items
            newLikedItems.push(product,index);
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
                <div className="accessories-content">
                    <div className="row m-0">
                        <div class="card-group" style={{ height: "100%" }}>
                        {[
                                { image: image, price: 50, title: "Gold Simple Necklace with beautiful micro design." },
                                { image: img3, price: 35, title:"Royal Green Earrings with detailed diamod work." },
                                { image: img2, price: 12, title:"Multicolored Diary"},
                                { image: img4, price: 40, title:"Diamond Infinity Bracelet" },
                            ].map((product,index) => (
                            <div class="card mx-1" key={index}>
                                <img src={product.image} class="card-img-top" alt="..." />
                                <div className="cart-text overlay ">
                                    <ul className='sty text-light'>
                                        <li><i class="fa fa-shopping-cart fs-4 " aria-hidden="true" onClick={() => addProduct(product,index)}></i></li>
                                        <li>
                                                <i
                                                    className={`fa ${likedItems.includes(index,product) ? 'fa-heart' : 'fa-heart-o text-light'} fs-4 py-2`}
                                                    aria-hidden="true"
                                                    onClick={() => handleLikeToggle(index,product)}
                                                ></i>
                                            </li>
                                        <li><i class="fa fa-search fs-4 " aria-hidden="true"></i></li>
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
export default Accessories      