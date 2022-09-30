// import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Review.css';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
        // console.log(data);

        fetch('https://hekto-ecommerce-server-side.vercel.app/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your review successfully added.',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }

            })
        reset();
    };

    return (
        <>
            <div className="review-main">

                <h2 className='text-center mb-3'>Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Your Name" required />
                    <input {...register("jobTitle", { required: true, maxLength: 50 })} placeholder="Your job title, and location." required />
                    <input {...register("image")} placeholder="Your image link" required />

                    <select {...register("rating")}>
                        <option value="5">Rating 5 star</option>
                        <option value="4">Rating 4 star</option>
                        <option value="3">Rating 3 star</option>
                        <option value="2">Rating 2 star</option>
                        <option value="1">Rating 1 star</option>
                    </select>

                    <textarea rows="10"{...register("comments")} placeholder="Your comments" required />
                    <input className='review-button' type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default Review;