import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageAllProducts.css';

const ManageAllProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-taiga-66433.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this product",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FB2E86',
            cancelButtonColor: '#19D16F',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                deleteTour(id);
            }
        });
    };

    const deleteTour = id => {
        const url = `https://gentle-taiga-66433.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (!data?.deletedCounted) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Products has been delete',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            });
    };


    return (
        <>
            <div className="container">
                <h2>Manage All Products ({products.length})</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Product Title</th>
                            <th>Image</th>
                            <th>Code</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {products?.map((product, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td><Image className='img img-fluid' src={product.thumbnail} alt="" /></td>
                                <td>{product.code}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>

                                <td>
                                    <button className="btn-delete px-2 py-1" onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </>
    );
};

export default ManageAllProducts;