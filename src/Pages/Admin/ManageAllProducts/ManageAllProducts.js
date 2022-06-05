import React, { useState } from 'react';
import { Image, Table } from 'react-bootstrap';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    const handleDelete = id => {
        // console.log(id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "Do you really want to delete this product",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then(result => {
        //     if (result.value) {
        //         deleteProduct(id);
        //     }
        // });
    };


    return (
        <>
            <div className="container">
                <h2>All Tours ({products.length})</h2>

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
                                <td><Image className='img img-fluid' src={product.image} alt="" /></td>
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