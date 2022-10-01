import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from './../../../../Hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const { token } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = user => {
        // console.log(user);
        fetch('https://hekto.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {

                if (result.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'New admin has been successfully created.',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
                reset();
            })
    };

    return (

        <div className="make-admin-main mt-5">

            <h2 className='text-center mb-3'>Make admin with exsting user</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='d-block'
                    {...register("email", {
                        required: "this field required.",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    type="email"
                    placeholder="Email Address" required
                />
                <input className='make-admin-button' type="submit" value="Make Admin" />
            </form>
            <div className='text-danger'>
                {errors.email && <span role="alert">{errors.email.message}</span>}
            </div>
        </div>
    );
};

export default MakeAdmin;