import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import HeadingBar from '../../Shared/HeadingBar/HeadingBar';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const location = useLocation();
    const history = useHistory();

    const { loginUser } = useAuth();
    const onSubmit = async data => {
        // await console.log(data);
        await loginUser(data.email, data.password, location, history);
        reset();
    };

    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>

            <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container '>
                    <h2>My Account</h2>
                    <p>Home. Pages. <span>Login</span></p>
                </div>
            </div>
            <Container>
                <div className='login-area'>
                    <div className='login-box mt-5 text-center d-flex justify-content-center align-items-center'>
                        <div className='sm-box'>
                            <h2 className='text-center login-text'>Login</h2>
                            <p className='text-center pb-3 txt-color'>Please login using account detail bellow.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='d-block login-email inpt-color px-1'
                                    {...register("email", {
                                        required: "required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Entered value does not match email format"
                                        }
                                    })}
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <div className='loginErrorMessage text-danger mt-1'>
                                    {errors.email && <span role="alert">{errors.email.message}</span>}
                                </div>
                                <input className='d-block login-password inpt-color px-1'

                                    {...register("password", {
                                        required: "required",
                                        minLength: {
                                            value: 6,
                                            message: "password must be at least 6 characters."
                                        }
                                    })}
                                    type="password"
                                    placeholder="Password"
                                />
                                <div className='loginErrorMessage text-danger mt-1'>
                                    {errors.password && <span role="alert">{errors.password.message}</span>}
                                </div>
                                <p className='text-start m-0'>Forgot your password?</p>
                                <br />
                                <Button className='sign-in text-center' type="submit">Sign In</Button>
                            </form>
                            <br />

                            <p className='text-center m-0 p-0'><span className='txt-color'>Don’t have an Account?</span><Nav.Link href='/register'> Create account</Nav.Link></p>

                        </div>
                    </div>
                </div>
            </Container>
            <br /><br /> <br /> <br /><br />
            <Footer></Footer>
        </>
    );
};

export default Login;