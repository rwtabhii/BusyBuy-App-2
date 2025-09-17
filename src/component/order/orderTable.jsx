import "./orderTable.css"

export function OrderTable({ order }) {
    return (
        <div className="orderTable">
            <div className="order-date">Order on : {order.date}</div>
            {/* ordertable */}
            <table class="Order-Table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>₹ {item.price}</td>
                            <td>{item.qty}</td>
                            <td>₹ {item.price * item.qty}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr class="totalPrice">
                        <td colspan="3"><strong>Total:</strong></td>
                        <td><strong>{order.total}</strong></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}