import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import User1 from '../../../Images/user-1.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <>
            <div className='d-flex align-items-center mb-3 p-4'>
                <div>
                    <img className='user-image img-fluid' src={User1} alt="" />
                </div>
                <div className='ms-3'>
                    <h5 className='text-danger'>Harold Barnett</h5>
                    <h6 className='text-secondary'>12, Rhythm Street, London</h6>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <FontAwesomeIcon className='' icon={faStar} />
                <FontAwesomeIcon className='' icon={faStar} />
                <FontAwesomeIcon className='' icon={faStar} />
                <FontAwesomeIcon className='' icon={faStar} />
                <FontAwesomeIcon className='' icon={faStar} />
            </div>
            <p>Good and prompt service and fair price otherwise I would have been stuck in the city.</p>
        </>
    );
};

export default Testimonial;