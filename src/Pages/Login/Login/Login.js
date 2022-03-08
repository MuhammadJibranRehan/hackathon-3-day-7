import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import HeadingBar from '../../Shared/HeadingBar/HeadingBar';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import './Login.css';
import useAuth from '../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
                            <p className='text-center pb-3'>Please login using account detail bellow.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='d-block login-email'
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
                                <input className='d-block login-password'

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
                                <p className='text-start mt-1'>Forgot your password?</p>
                                <Button className='sign-in text-center mt-2' type="submit">Sign In</Button>
                            </form>
                            <Nav.Link href='/register'>
                                <p className='text-center mt-3'>Don’t have an Account? Create account</p>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;