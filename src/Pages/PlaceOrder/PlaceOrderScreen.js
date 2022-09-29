// import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { useDeliveryInfo } from '../../Contexts/DeliveryProvider';
import useAuth from '../../Hooks/useAuth';
import useOrders from '../../Hooks/useOrders';
import Footer from '../Shared/Footer/Footer';
import HeadingBar from '../Shared/HeadingBar/HeadingBar';
import Navigation from '../Shared/Navigation/Navigation';
import DeliveryForm from './DeliveryForm/DeliveryForm';
import OrderCard from './OrderCard/OrderCard';
import OrderPrice from './OrderPrice/OrderPrice';
import './PlaceOrderScreen.css';

const PlaceOrderScreen = () => {
    const [orders] = useOrders();
    const history = useHistory();
    const { user } = useAuth();

    const { shippingData, disabled } = useDeliveryInfo();
 
    const cartOrders = orders?.filter((orders) => !orders?.shippingName);
     
    // const data= {
    //     orders,shippingData
    // }

    const handlePlaceOrder=(shippingData,email)=>{
        fetch(`https://gentle-taiga-66433.herokuapp.com/orders-placed/${email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(shippingData)
        })
            .then(res => res.json())
            .then(result => {
                // if (result.acknowledged) {
                //     Swal.fire({
                //         position: 'center',
                //         icon: 'success',
                //         title: 'Your order has added to the cart',
                //         showConfirmButton: false,
                //         timer: 5000
                //     })
                // }
            })



        // place orders to placeOrders Collection 
        // axios.post('https://gentle-taiga-66433.herokuapp.com/place-orders', data).then(res => {
            // console.log("res >>>", data);
            // if (res.data.insertedId) {
            //     Swal.fire({
            //         position: 'center',
            //         icon: 'success',
            //         title: 'Order Placed Successfully.',
            //         showConfirmButton: false,
            //         timer: 5000
            //     })
                // alert('Added Successfully');
        //     }
        // });

        // delete cart orders from orderCollection 
        // const url = `https://gentle-taiga-66433.herokuapp.com/orders/delete/${email}`;
        // fetch(url, {
        //     method: 'DELETE',
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     if(data.deletedCount > 0){
                // alert('Deleted successfully !');
                // const reminingOrders=orders.filter(orders=>user.email!== email);
                // setOrders(remainingOrders);
        //     }
        // });

    }
    


    return (
        <>
            <HeadingBar></HeadingBar>
            <Navigation></Navigation>
            <div className='myAccount d-flex align-items-center mb-5'>
                <div className='container'>
                    <h2>Place Order</h2>
                    <p>Home. Pages. <span>Cart</span></p>
                </div>
            </div>

            <div className="container">
                {cartOrders.length > 0 ? (
                // {orders.length > 0 ? (
                    <>
                        <div className="row">
                            {/* left side form  */}
                            <div className="col-md-6 delivery-container">
                                <DeliveryForm />
                            </div>
                            {/* right side  */}
                            <div className="col-md-6 ">
                                <div className="p-3 delivery-container ">

                                    {/* order details  */}
                                    <div className="d-block delivery-info">
                                        <p className="my-0">Deliver to :  <span className="fw-normal">{shippingData?.shippingName ? `${shippingData?.shippingName}` : ''}</span> </p>
                                        <p className="my-0">Phone :  <span className="fw-normal">{shippingData?.phone ? `${shippingData?.phone}` : ''}</span></p>
                                        <p className="my-0">Email :  <span className="fw-normal">{shippingData?.shippingEmail ? `${shippingData?.shippingEmail}` : ''}</span></p>
                                        <p className="my-0">Deliver Place :  <span className="fw-normal">{shippingData?.address ? `${shippingData?.address}` : ''}</span></p>
                                        <p className="my-0">Apartment, Suit :  <span className="fw-normal">{shippingData?.apartment ? `${shippingData?.apartment}` : ''}</span></p>
                                        <p className="my-0">City-Post code :  <span className="fw-normal">{shippingData?.city ? `${shippingData?.city}-${shippingData?.postcode}` : ''}</span></p>
                                        <p className="my-0">Country :  <span className="fw-normal">{shippingData?.country ? `${shippingData?.country}` : ''}</span></p>


                                    </div>

                                    {/* orders  */}
                                    <div className="orderContainer " >
                                        {cartOrders?.map(order => (
                                            <OrderCard
                                                key={order?._id}
                                                order={order}
                                            />
                                        ))}
                                    </div>
                                    {/* <div className="orderContainer " >
                                        {orders.map(order => (
                                            <OrderCard
                                                key={order._id}
                                                order={order}
                                            />
                                        ))}
                                    </div> */}

                                    {/* price  */}
                                    <OrderPrice />

                                    {/* place order button  */}      
                                        <div>
                                            {disabled ? (
                                                <button disabled="disabled" className="place-order-btn opacity-50">Place Order</button>
                                                ) : (<button className="place-order-btn" onClick={() => {
                                                            // handlePlaceOrder(orders, user.email);
                                                            handlePlaceOrder(shippingData,user.email);
                                                            history.push('/order-completed');
                                                            // setOrder([]);
                                                        }}>Place Order
                                                    </button>)
                                            }
                                        
                                        </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="pt-5">
                        <h1 className="text-center">No Order has added!!</h1>
                    </div>
                )
                }
            </div>
            <Footer></Footer>
        </>
    )

}

export default PlaceOrderScreen;