import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GridLoader } from "react-spinners";
import { OrderList } from "../../component/order/orderList/orderList";
import { getOrderApi } from "../../api/order/orderApi";
import "./orderPage.css";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/authReducer/authReducer";
import { setOrders } from "../../redux/orderReducer/orderReducer";

export function OrderPage() {
  // reduxDispatcher → provides setOrder method for global order state
const dispatch = useDispatch()

  // selector → provides logged-in user details
  const {userDetail} = useSelector(authSelector)

  // Local state → track loading spinner
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all orders for the logged-in user
  const fetchOrder = async () => {
    try {
      const allOrder = await getOrderApi(userDetail?.uid);
      console.log("Fetched Orders:", allOrder);

      // Save orders in global state
     dispatch(setOrders(allOrder))

      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  // ✅ Run once on mount
  useEffect(() => {
    if (userDetail?.uid) {
      fetchOrder();
    }
  }, [userDetail?.uid]); // dependency ensures it runs when userDetail is available

  return (
    <>
      {loading ? (
        // Loading spinner while fetching data
        <div className="spinner-container">
          <GridLoader color="#36d7b7" loading={loading} size={20} />
        </div>
      ) : (
        // Order list once data is fetched
        <div className="order-container">
          <div className="heading">Your Orders :</div>
          <OrderList />
        </div>
      )}
    </>
  );
}
