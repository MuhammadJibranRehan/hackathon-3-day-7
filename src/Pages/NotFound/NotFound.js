import React from 'react';
import { Image } from 'react-bootstrap';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';
import notFoundImage from './../../Images/404-not-found.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>

            <div className='notFoundBar d-flex align-items-center'>
                <div className='container '>
                    <h2>404 Not Found</h2>
                    <p>Home. Pages. <span>404 Not Found</span></p>
                </div>
            </div>
            <div className='container text-center'>
                <Image className='img-fluid' src={notFoundImage} alt='' />
            </div>
        </>
    );
};

export default NotFound;