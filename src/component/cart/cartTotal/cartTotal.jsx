import "./cartTotal.css"
import { useCartValue } from "../../../context/cartContext/cartContext"

export function CartTotal() {
  const { cart } = useCartValue();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cartTotal">
      <p>Total: ₹{totalPrice}</p>
      <button className="purchase">Purchase</button>
    </div>
  );
}