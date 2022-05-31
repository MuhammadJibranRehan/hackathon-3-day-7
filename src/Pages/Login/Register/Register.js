import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import HeadingBar from '../../Shared/HeadingBar/HeadingBar';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import './Register.css';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, getValues, formState: { errors }, reset } = useForm();

    const { registerUser } = useAuth();

    const onSubmit = async data => {
        // await console.log(data);
        await registerUser(data.email, data.password);
        reset();
    };

    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>

            <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container '>
                    <h2>Create Account</h2>
                    <p>Home. Pages. <span>Register</span></p>
                </div>
            </div>
            <Container>
                <div className='register-area'>
                    <div className='register-box mt-5 text-center d-flex justify-content-center align-items-center'>
                        <div className='sm-box'>
                            <h2 className='text-center register-text'>Register</h2>
                            <p className='text-center txt-color'>Please register account detail bellow.</p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='name inpt-color px-1'
                                    {...register("name",
                                        {
                                            required: 'this field required.',
                                            maxLength: 25,
                                            pattern: {
                                                message: "Entered your name"
                                            }
                                        })}
                                    placeholder="Your Name" />
                                <div className='errorMessage text-danger'>
                                    {errors.name && <span role="alert">{errors.name.message}</span>}
                                </div>
                                <input className='d-block email inpt-color px-1'
                                    {...register("email", {
                                        required: "this field required.",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: "Entered value does not match email format"
                                        }
                                    })}
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <div className='errorMessage text-danger'>
                                    {errors.email && <span role="alert">{errors.email.message}</span>}
                                </div>
                                <input className='d-block password inpt-color px-1'

                                    {...register("password", {
                                        required: "this field required.",
                                        minLength: {
                                            value: 6,
                                            message: "password must be at least 6 characters."
                                        }
                                    })}
                                    type="password"
                                    placeholder="Your Password"
                                />
                                <div className='errorMessage text-danger '>
                                    {errors.password && <span role="alert">{errors.password.message}</span>}
                                </div>
                                <input className='d-block password inpt-color px-1'

                                    {...register("rePassword", {
                                        required: "this field required.",
                                        validate: (value) =>
                                            value === getValues("password") || "password doesn't match.",
                                        minLength: {
                                            value: 6,
                                            message: "password must be at least 6 characters.",
                                            message2: 'Password does not match !'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Re-Type Your Password"
                                />
                                <div className='errorMessage text-danger '>
                                    {errors.rePassword && <span role="alert">{errors.rePassword.message}</span>}
                                </div>

                                <Button className='registerButton text-center p-0' type="submit">Register</Button>
                            </form>
                            <br />

                            <p className='text-center m-0 p-0'><span className='txt-color'>Already Registered?</span><Nav.Link href='/login'> Please Login</Nav.Link></p>


                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Register;