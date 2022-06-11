import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Dashboard.css';
import { faBagShopping, faCreditCard, faMessage, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import PayNow from '../PayNow/PayNow';

const Dashboard = () => {

    const [control, setControl] = useState("MyOrders");






    return (
        <>
            {/* ...................Admin Dashboard...................... */}
            <div>
                <div className="admin-container">
                    <div className="dashboard">
                        <div className="admin-box">
                            <div className="row admin-container">
                                <div className="col-md-2 p-0">
                                    <div className="admin-area ">
                                        <div className='dashboard-logo'>
                                            <h1 className='mt-2 mb-0 fw-bold'>Hekto</h1>
                                            <p className='m-0 text-black'>User Dashboard</p>
                                        </div>
                                        <hr />
                                        <div className="all-menu ms-2">
                                            <li onClick={() => setControl("MyOrders")} className="admin-menu  " >

                                                <FontAwesomeIcon className='dashboard-icon' icon={faBagShopping} /> My Orders

                                            </li>

                                            <li onClick={() => setControl("PayNow")} className="admin-menu ">
                                                <FontAwesomeIcon className='dashboard-icon' icon={faCreditCard} /> Pay Now
                                            </li>
                                            <li onClick={() => setControl("Review")} className="admin-menu "  >
                                                <FontAwesomeIcon className='dashboard-icon' icon={faMessage} /> Review
                                            </li>
                                            <Link className='exitLink' as={HashLink} to='/'>
                                                <li className="admin-menu ">
                                                    <FontAwesomeIcon className='dashboard-icon' icon={faRightToBracket} /> Exit
                                                </li>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboard-body col-md-10 text-center p-0 text-center m-0">
                                    {control === "MyOrders" && <MyOrders></MyOrders>}
                                    {control === "PayNow" && <PayNow></PayNow>}
                                    {control === "Review" && <Review></Review>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Dashboard;