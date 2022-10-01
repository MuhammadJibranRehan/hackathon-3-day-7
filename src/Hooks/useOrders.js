import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './useAuth';

const useOrders = () => {

    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://hekto.onrender.com/orders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders, email])

    return [orders, setOrders]
};

export default useOrders;