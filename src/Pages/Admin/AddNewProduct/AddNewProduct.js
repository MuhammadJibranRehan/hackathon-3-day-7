import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AddNewProduct.css';


const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data).then(res => {
            // console.log(res);
            if (res.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added New Product Successfully.',
                    showConfirmButton: false,
                    timer: 2000
                })
                // alert('Added Successfully');
                reset();
            }
        })
    }

    return (
        <>
            <div className="add-product-main">

                <h2 className='text-center mb-3'>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type="number" min='1'{...register("_id", { required: true, maxLength: 10 })} placeholder="ID" /> */}
                    <input {...register("title", { required: true, maxLength: 30 })} placeholder="Title" required />
                    <input {...register("code", { required: true, maxLength: 10 })} placeholder="Product code" required />
                    <input type="number" min='1' {...register("quantity")} placeholder="Quantity" required />
                    <input type="number" min='1' {...register("price")} placeholder="Price" required />
                    <input type="number" min='1'{...register("regulerPrice")} placeholder="Reguler price" required />
                    <input type="number" min='0'{...register("discountPercentage")} placeholder="Discount percentage" required />
                    <input type="number" min='1' max='5' step="0.1" {...register("rating")} placeholder="Rating" required />
                    <input {...register("brand", { required: true, maxLength: 30 })} placeholder="Brand" required />
                    <input {...register("category", { required: true, maxLength: 30 })} placeholder="Category" required />
                    <input {...register("subCategory", { required: true, maxLength: 30 })} placeholder="Sub-Category" required />
                    <input {...register("thumbnail")} placeholder="Product thumbnail url" required />
                    {/* <input {...register("images")} placeholder="Image url must be separated by commas.  [    ,    ,   ,   ]" /> */}
                    <textarea {...register("description")} placeholder="Product Description" required />
                    <input className='add-product-button' type="submit" value="Add New Product" />
                </form>
            </div>
        </>
    );
};

export default AddNewProduct;