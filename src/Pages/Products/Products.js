import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useCartContext } from '../../Contexts/CartContext/CartContext';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';
import cartIcon from '../../Images/featuredIcon/fluent_cart-24-regular.svg';
import heartIcon from '../../Images/featuredIcon/uil_heart-alt.svg';
import searchPlusIcon from '../../Images/featuredIcon/search-plus.svg';
import './Products.css';

const Products = () => {

    const [products] = useProducts();
    const {
        // state: {  },
        dispatch,
    } = useCartContext();

    return (
        <>

            <HeadingBar></HeadingBar>
            <Navigation></Navigation>


            {/* <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container '>
                    <h2>My Account</h2>
                    <p>Home. Pages. <span>Products</span></p>
                </div>
            </div> */}
            {/* ....................All Products........................ */}
            <Container >

                <section className='row pt-1'>
                    {products.map(product =>
                        <div className='col-lg-3 col-md-6 md-12 g-4'>
                            <div className='featuredCard'>
                                <div className='fCard-header'>
                                    <div className='d-flex f-Icon'>


                                        <img className='img-fluid f-cartIcon mt-2 ms-2' onClick={() =>
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: product,
                                            })
                                        }
                                            src={cartIcon} alt="" />


                                        {/* <img className='img-fluid f-cartIcon mt-2 ms-2' onClick={addToCart} src={cartIcon} alt="" /> */}
                                        <img className='img-fluid f-heartIcon mt-2' src={heartIcon} alt="" />
                                        <img className='img-fluid f-searchPlus mt-2' src={searchPlusIcon} alt="" />
                                    </div>
                                    <div className='f-img-btn'>
                                        <div className='text-center f-card-img'>
                                            <img className='img-fluid' src={product.thumbnail} alt="" />
                                        </div>
                                        <div className='d-flex justify-content-center mt-1'>
                                            <Button className='fpd-view-dtails mt-4'>View Details</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className='fCard-footer text-center mt-3'>
                                    <h5>{product.title}</h5>
                                    <div className='rectangleColor d-flex justify-content-center mb-2'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <h6>Code - {product.code}</h6>
                                    <h6>${parseInt(parseInt(product.price)).toFixed(2)}</h6>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </Container>
            <p className='my-4'></p>
            <Footer></Footer>
        </>
    );
};

export default Products;