import "./cartTotal.css"
import { useCartValue } from "../../../context/cartContext/cartContext"
import { addOrderApi } from "../../../api/order/orderApi";
import { toast } from "react-toastify";
import { useAuthValue } from "../../../context/authContext/authContext";
import { clearCartApi } from "../../../api/cart/cart";
 

export function CartTotal() {
  const { cart, dispatchCart } = useCartValue();
  const { userDetail } = useAuthValue()
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const addOrder = async (data) => {
    try {
      await addOrderApi(data, userDetail.uid);
      await clearCartApi(userDetail.uid);
      dispatchCart({ type: "CLEAR_CART" })
      toast.success("Order Competed");
    }
    catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <div className="cartTotal">
      <p>Total: ₹{totalPrice}</p>
      <button className="purchase" onClick={() => addOrder(cart)}>Purchase</button>
    </div>
  );
}