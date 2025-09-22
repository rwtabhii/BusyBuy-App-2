import { useEffect } from "react";
import { OrderList } from "../../component/order/orderList/orderList";
import { useOrderValue } from "../../context/orderContext/orderContext"
import "./orderPage.css"
import { getOrderApi } from "../../api/order/orderApi";
import { useAuthValue } from "../../context/authContext/authContext";

export function OrderPage() {
    const { setOrder } = useOrderValue();
    const { userDetail } = useAuthValue()

   const fetchOrder = async()=>{
    try { 
            const allOrder = await getOrderApi(userDetail.uid);
            console.log(allOrder);
            setOrder(allOrder);
        } catch (error) {
            console.log(error);
        }
   }
    useEffect(() => {
      fetchOrder();
    },[])


    return (
        <div className="order-container">
            <div className="heading">Your Orders :</div>
            <OrderList/>
        </div>

    )
}