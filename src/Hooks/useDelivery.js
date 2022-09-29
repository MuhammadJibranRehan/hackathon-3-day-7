import { useContext } from "react";
import { DeliveryContext } from "../Contexts/DeliveryProvider/DeliveryProvider";

export const useDelivery = () => {
    return useContext(DeliveryContext);
}