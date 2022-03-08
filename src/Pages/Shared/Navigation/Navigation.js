import React from 'react';
import { Container, InputGroup, Nav, Navbar } from 'react-bootstrap';
import searchIcon from './../../../Images/search-icon.svg';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';


const Navigation = () => {
    // const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='' sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className='logo-font'>Hekto</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse  >
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to='/home#home' ><h6 className=' navigation-font  fs-5'>Home</h6></Nav.Link>
                            <Nav.Link as={HashLink} to='/products'><h6 className=' navigation-font  fs-5'>Products</h6></Nav.Link>
                            <Nav.Link as={HashLink} to='/about-us'><h6 className='navigation-font fs-5' >About Us</h6></Nav.Link>
                            <Nav.Link as={HashLink} to='/admin'><h6 className=' navigation-font fs-5' >Admin</h6> </Nav.Link>
                            <Nav.Link as={HashLink} to='/login'> <h6 className=' navigation-font fs-5'>Login</h6> </Nav.Link>
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