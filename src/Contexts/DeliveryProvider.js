import React, { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext();

export const useDeliveryInfo = () => {
    return useContext(DeliveryContext);
}
const DeliveryProvider = ({ children }) => {

    const [shippingData, setShippingData] = useState({})
    const [disabled, setDisabled] = useState(true)


    const value = { shippingData, setShippingData, disabled, setDisabled }

    return (
        <DeliveryContext.Provider value={value}>
            {children}
        </DeliveryContext.Provider>
    )
}

export default DeliveryProvider