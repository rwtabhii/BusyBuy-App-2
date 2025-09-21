import { OrderTable } from "../../component/order/orderTable"
import "./orderPage.css"
const orders = [
    {
        id: "order_001",
        date: "2025-09-16",
        total : 1599,
        items: [
            { id: 1, title: "Fjallraven Backpack", price: 1099, qty: 2 },
            { id: 2, title: "T-Shirt", price: 499, qty: 1 }
        ]
    },
    {
        id: "order_002",
        date: "2025-09-17",
        total: 1599,
        items: [
            { id: 3, title: "Laptop", price: 45000, qty: 1 }
        ]
    }
]

export function OrderPage() {
    return (
        <div className="order-container">
            <div className="heading">Your Orders :</div>
            {
                orders.map((order) => (
                    <OrderTable key={order.id} order={order} />
                ))
            }
        </div>

    )
}