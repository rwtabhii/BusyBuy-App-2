import { OrderTable } from "../orderTable"
import { useOrderValue } from "../../../context/orderContext/orderContext"




export function OrderList() {
    const { order } = useOrderValue()
    return (<>        {
        order?.map((o) => (
            <OrderTable key={o.id} order={o} />
        ))
    }
    </>

    )
}