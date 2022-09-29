import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dashboard.css';
import { faBagShopping, faCartPlus, faChartColumn, faCreditCard, faListCheck, faMessage, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Review from '../User/Review/Review';
import MyOrders from '../User/MyOrders/MyOrders';
import PayNow from '../User/PayNow/PayNow';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddNewProduct from '../Admin/AddNewProduct/AddNewProduct';
import ManageAllProducts from '../Admin/ManageAllProducts/ManageAllProducts';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
const Dashboard = () => {

    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();


    return (
        <>
            {/* ................... Dashboard...................... */}
            <div className="dashboard-container">
                <div className="row">
                    <div className="dashboard-menu col-md-2 p-0">
                        <NavLink exact to='/' className='text-decoration-none' >

                            <div className='dashboard-logo'>
                                <h1 className='mt-2 mb-2 mb-0 fw-bold'>Hekto</h1>
                            </div>
                        </NavLink>
                        <hr />
                        <div className="all-menu ms-2">
                            <ul>
                                {!admin && <span>
                                    <NavLink exact to={`${url}`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faChartColumn} />  Dashboard
                                        </li>
                                    </NavLink>

                                    <NavLink exact to={`${url}/my-orders`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faBagShopping} />  My Orders
                                        </li>
                                    </NavLink>

                                    <NavLink exact to={`${url}/pay-now`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faCreditCard} />Pay Now
                                        </li>
                                    </NavLink>

                                    <NavLink exact to={`${url}/review`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faMessage} />Review
                                        </li>
                                    </NavLink>
                                </span>}

                                {/*--------------------------- admin ---------------------- */}
                                {admin && <span>
                                    <NavLink exact to={`${url}`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faChartColumn} />  Dashboard
                                        </li>
                                    </NavLink>
                                    <NavLink exact to={`${url}/add-new-product`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faCartPlus} />Add new product
                                        </li>
                                    </NavLink>
                                    <NavLink exact to={`${url}/manage-all-products`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faListCheck} />Manage all products
                                        </li>
                                    </NavLink>
                                    <NavLink exact to={`${url}/manage-orders`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faBagShopping} />   Manage orders
                                        </li>
                                    </NavLink>
                                    <NavLink exact to={`${url}/make-admin`} className='dashboard-link' activeClassName="selected">
                                        <li>
                                            <FontAwesomeIcon className='dashboard-icon' icon={faUserPlus} />Make admin
                                        </li>
                                    </NavLink>
                                </span>}
                                <hr />

                                <NavLink to='' onClick={logOut} className='dashboard-link'>
                                    <li>
                                        <FontAwesomeIcon className='dashboard-icon' icon={faRightToBracket} />Log Out
                                    </li>
                                </NavLink>

                            </ul>
                        </div>
                    </div>

                    <div className="dashboard-body col-md-10 text-center p-0 text-center m-0">
                        {/* ...............................Nested Route.....................  */}
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome />
                            </Route>
                            <Route path={`${path}/my-orders`}>
                                <MyOrders />
                            </Route>
                            <Route path={`${path}/pay-now`}>
                                <PayNow />
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            {/*--------------------------- Admin Route---------------------- */}
                            <AdminRoute path={`${path}/add-new-product`}>
                                <AddNewProduct />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-all-products`}>
                                <ManageAllProducts />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-orders`}>
                                <ManageOrders />
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin />
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;