import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link, useParams } from 'react-router-dom'


const Product = () => {
   
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 m-0">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>
                <div className="col-md-6 m-0">
                    <h3 className='text-uppercase text-black-50'>{product.category}</h3>
                    <h4 className='display-5'>{product.title}</h4>
                    <p className='lead'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        $ {product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark mx-4 py-2' onClick={() => addProduct(product)}>Add To Cart</button>
                    <Link to="/cart" className='btn btn-dark'>Go To Cart</Link>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product