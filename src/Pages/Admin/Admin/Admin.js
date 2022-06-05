import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import './Admin.css';
import { faBagShopping, faCartPlus, faListCheck, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Admin = () => {

    const [control, setControl] = useState("AddNewProduct");






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
                                            <p className='m-0 text-black'>Admin Dashboard</p>
                                        </div>
                                        <hr />
                                        <div className="all-menu ms-2">
                                            <li onClick={() => setControl("AddNewProduct")} className="admin-menu  " >
                                                <FontAwesomeIcon className='dashboard-icon' icon={faCartPlus} /> Add new product
                                            </li>

                                            <li onClick={() => setControl("ManageAllProducts")} className="admin-menu ">
                                                <FontAwesomeIcon className='dashboard-icon' icon={faListCheck} /> Manage all products
                                            </li>
                                            <li onClick={() => setControl("ManageOrders")} className="admin-menu "  >
                                                <FontAwesomeIcon className='dashboard-icon' icon={faBagShopping} /> Manage orders
                                            </li>
                                            <li onClick={() => setControl("MakeAdmin")} className="admin-menu " >
                                                <FontAwesomeIcon className='dashboard-icon' icon={faUser} /> Make admin
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
                                    {control === "ManageAllProducts" && <ManageAllProducts></ManageAllProducts>}
                                    {control === "ManageOrders" && <ManageOrders></ManageOrders>}
                                    {control === "AddNewProduct" && <AddNewProduct></AddNewProduct>}
                                    {control === "MakeAdmin" && <MakeAdmin></MakeAdmin>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Admin;