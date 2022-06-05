import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        // axios.post('http://localhost:3000/makeadmin', data).then(res => {
        //         // console.log(res);
        //         if (res.data.insertedId) {
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'New admin has been successfully created.',
        //                 showConfirmButton: false,
        //                 timer: 2000
        //             })
        //             // alert('Added Successfully');
        //             reset();
        //         }
        //     })
    }

    return (
        <div className='d-flex'>
            <div className="make-admin-main w-50">

                <h2 className='text-center mb-3'>Make a new admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className=' px-1'
                        {...register("name",
                            {
                                required: 'this field required.',
                                maxLength: 25,
                                pattern: {
                                    message: "Entered your name"
                                }
                            })}
                        placeholder="Admin Name" />
                    <div className=' text-danger'>
                        {errors.name && <span role="alert">{errors.name.message}</span>}
                    </div>
                    <input className='d-block  px-1'
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
                    <div className=' text-danger'>
                        {errors.email && <span role="alert">{errors.email.message}</span>}
                    </div>
                    <input className='d-block  px-1'

                        {...register("password", {
                            required: "this field required.",
                            minLength: {
                                value: 6,
                                message: "password must be at least 6 characters."
                            }
                        })}
                        type="password"
                        placeholder="Password"
                    />
                    <div className=' text-danger'>
                        {errors.password && <span role="alert">{errors.password.message}</span>}
                    </div>
                    <input className='make-admin-button' type="submit" value="Make New Admin" />
                </form>
            </div>
            <div className="make-admin-main w-50">

                <h2 className='text-center mb-3'>Make admin with exsting user</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className='d-block  px-1'
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
                    <div className=' text-danger'>
                        {errors.email && <span role="alert">{errors.email.message}</span>}
                    </div>

                    <input className='make-admin-button' type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;