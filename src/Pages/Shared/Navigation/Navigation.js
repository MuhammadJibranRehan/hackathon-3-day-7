import React from 'react';
import { Container, InputGroup, Nav, Navbar } from 'react-bootstrap';
import searchIcon from './../../../Images/search-icon.svg';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user } = useAuth();
    let page = '/';
    if (typeof window !== `undefined`) {
        page = window.location.pathname;
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='mt-5 ' >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className='logo-font'>Hekto</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse  >
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to='/' ><h6 className={
                                page === '/' || page === '/home' ? "navigation-font  fs-5 active" : "navigation-font  fs-5"
                            }>Home</h6></Nav.Link>
                            <Nav.Link as={HashLink} to='/products'><h6 className={
                                page === '/products' || page === '/products/' ? "navigation-font  fs-5 active" : "navigation-font  fs-5"
                            }>Products</h6></Nav.Link>
                            <Nav.Link as={HashLink} to='/contact'><h6 className={
                                page === '/contact' || page === '/contact/' ? "navigation-font  fs-5 active" : "navigation-font  fs-5"
                            }>Contact Us</h6></Nav.Link>

                            {user?.email &&
                                <Nav.Link as={HashLink} to='/dashboard'><h6 className={
                                    page === '/dashboard' || page === '/dashboard/' ? "navigation-font  fs-5 active" : "navigation-font  fs-5"
                                } >Dashboard</h6> </Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {/* 
                            <Link className=' mt-2'><img
                                className="rounded-circle"
                                style={{ width: '40px' }}
                                src={user?.photoURL}
                                alt=""
                            /></Link>
                            {
                                user?.email &&
                                <Navbar.Text className='text-dark fw-3 text-dark fs-5 mt-1 ms-2' > {user?.displayName}</Navbar.Text>

                            }
                            {
                                user?.email ?
                                    <Button onClick={logOut} className='fw-3 btn-authentication fs-5 px-3 ms-2 my-1'>Log Out</Button> :
                                    <Button className='btn-authentication fw-3 fs-5 px-3'><Nav.Link className='login' to='/login'>Login</Nav.Link></Button>
                            } */}
                            <InputGroup>
                                <input type='text'
                                    placeholder="Search" className='px-1 search-input'
                                />
                                <button className='search-button'>
                                    <img className='p-2' src={searchIcon} alt="" />
                                </button>
                            </InputGroup>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;