import React from 'react';
import { Badge, Container, Image } from 'react-bootstrap';
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

const HeadingBar = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='Heading-Bar d-flex align-items-center pt-3 fixed-top'>
            <Container className='d-flex justify-content-between'>

                <div id='sm-dvice-hide'>
                    <Image className='img-fluid mb-0 h-75 ' src={emailIcon} alt='' />
                    <h6 className='ms-1 '>info@hekto.com</h6>
                    <Image className='img-fluid mb-0 h-75 ms-3' src={phoneCallIcon} alt='' />
                    <h6 className='ms-1'>(12345)67890</h6>
                </div>
                <div className='d-flex'>

                    <h6>English</h6>
                    <Image className='img-fluid mb-2 ms-1' src={downIcon} alt='' />


                    <h6 className='ms-2'>USD</h6>
                    <Image className='img-fluid mb-2 ms-1' src={downIcon} alt='' />

                    <h6 className='ms-2'>Wishlist</h6>
                    <Image className='img-fluid mb-2 ms-1' src={heartIcon} alt='' />


                    <Link className='text-decoration-none text-white' as={HashLink} to='/cart'><h6 className='ms-2'>Cart</h6></Link>
                    <span><Link className='text-decoration-none text-white' as={HashLink} to='/cart'>
                        <Image className='img-fluid mb-2 ms-1 position-relative ' src={cartIcon} alt='' />
                        <Badge bg="badge position-absolute pill px-1 py-0 mt-2  top-0  ">0</Badge></Link>
                    </span>

                    {user?.email ?
                        <Link onClick={logOut} className='d-flex text-decoration-none text-white'><h6 className='ms-5'>Logout</h6><Image className='img-fluid mb-2 ms-1' src={carbonUserIcon} alt='' /></Link>
                        : <Link className='d-flex text-decoration-none text-white' as={HashLink} to='/login'><h6 className='ms-5'>Login</h6><Image className='img-fluid mb-2 ms-1' src={carbonUserIcon} alt='' /></Link>
                    }


                </div>
            </Container >
        </div >
    );
};

export default HeadingBar;