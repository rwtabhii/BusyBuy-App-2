import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { OrderList } from "../../component/order/orderList/orderList";
import { useOrderValue } from "../../context/orderContext/orderContext"
import "./orderPage.css"
import { getOrderApi } from "../../api/order/orderApi";
import { useAuthValue } from "../../context/authContext/authContext";



export function OrderPage() {
    const { setOrder } = useOrderValue();
    const { userDetail } = useAuthValue()
    const [loding, setLoding] = useState(true)

    const fetchOrder = async () => {
        try {
            const allOrder = await getOrderApi(userDetail.uid);
            console.log(allOrder);
            setOrder(allOrder);
            setLoding(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchOrder();
    }, [])


    return (<>
        {loding ?
            (<div className="spinner-container" >
                <GridLoader color="#36d7b7" loading={loding} size={20} />
            </div>) : (<div className="order-container">
                <div className="heading">Your Orders :</div>
                <OrderList />
            </div>)
        }
    </>)
}