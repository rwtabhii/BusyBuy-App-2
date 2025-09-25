import { useSelector } from "react-redux"
import { OrderTable } from "../orderTable"
import { orderSelector } from "../../../redux/orderReducer/orderReducer"





export function OrderList() {
   const order = useSelector(orderSelector)
    return (<>        {
        order?.map((o) => (
            <OrderTable key={o.id} order={o} />
        ))
    }
    </>

    )
}