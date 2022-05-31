import React from 'react';
import Footer from '../Shared/Footer/Footer';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';

const AboutUs = () => {
    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>

            <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container '>
                    <h2>My Account</h2>
                    <p>Home. Pages. <span>About Us</span></p>
                </div>
            </div>
            <div>
                <h1>About Us</h1>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;