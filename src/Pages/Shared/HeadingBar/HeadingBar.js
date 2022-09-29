import React from 'react';
import { Image } from 'react-bootstrap';
import emailIcon from './../../../Images/e-mail-icon.svg';
import phoneCallIcon from './../../../Images/bx_bx-phone-call-icon.svg';
import heartIcon from './../../../Images/heart-icon.svg';
import downIcon from './../../../Images/akar-icon-shevron-down.svg';
import carbonUserIcon from './../../../Images/carbon_user.svg';
import cartIcon from './../../../Images/cart-icon.svg';
import './HeadingBar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useOrders from '../../../Hooks/useOrders';



const HeadingBar = () => {

    const { user, logOut } = useAuth();
    // console.log(user);

    // const { state: { cart }, } = useCart();
    const [orders] = useOrders()
    const cartOrders = orders?.filter((orders) => !orders?.shippingName);
    return (
        <header className='Heading-Bar d-flex align-items-center fixed-top'>
            <nav className='container d-flex justify-content-between mt-3'>

                <div id='sm-dvice-hide'>
                    <Image className='img-fluid mb-0 h-75 ' src={emailIcon} alt='' />
                    <h6 className='ms-1 '>info@hekto.com</h6>
                    <Image className='img-fluid mb-0 h-75 ms-3' src={phoneCallIcon} alt='' />
                    <h6 className='ms-1'>(12345)67890</h6>
                </div>
                <div className='d-flex'>

                    <h6>English</h6>
                    <Image className='img-fluid mb-2 ms-1' src={downIcon} alt='' />

                    <h6 className='ms-2'>Wishlist</h6>
                    <Image className='img-fluid mb-2 ms-1' src={heartIcon} alt='' />

                    <div><Link to='/cart' as={HashLink} className='text-decoration-none text-white ms-2' >
                        Cart
                        <span className="badge">{cartOrders?.length}</span>
                        {/* <span className="badge">{orders.length}</span> */}
                        <Image className='img-fluid mb-2 position-relative' src={cartIcon} alt='' />
                    </Link>
                    </div>

                    {user?.email ?
                        <Link to='' onClick={logOut} className='d-flex text-decoration-none text-white'><h6 className='ms-3'>Logout</h6><Image className='img-fluid mb-2' src={carbonUserIcon} alt='' /></Link>
                        : <Link to='/login' as={HashLink} className='d-flex text-decoration-none text-white' ><h6 className='ms-3'>Login</h6><Image className='img-fluid mb-2' src={carbonUserIcon} alt='' /></Link>
                    }


                </div>
            </nav >
        </header >
    );
};

export default HeadingBar;