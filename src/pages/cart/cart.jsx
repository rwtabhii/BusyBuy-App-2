import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

import { CartTotal } from "../../component/cart/cartTotal/cartTotal";
import { CartCard } from "../../component/cart/cartCard/cartCard";
import "./cart.css";
import { getCartItemApi } from "../../api/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/authReducer/authReducer";
import { cartReducer, cartSelector } from "../../redux/cartReducer/cartReducer";
import { getCartItem } from "../../redux/cartReducer/cartReducer";


export function CartPage() {
  const dispatch = useDispatch();
  const  cart   = useSelector(cartSelector)
  const {userDetail} = useSelector(authSelector)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userDetail?.uid) return; // ✅ safety check

        // Fetch user cart items from Firestore
        const cartItems = await getCartItemApi(userDetail.uid);

        // Update global cart state
        dispatch(getCartItem(cartItems));
      } catch (error) {
        console.error("❌ Failed to fetch cart items:", error);
      } finally {
        // ✅ Stop loader regardless of success/error
        setLoading(false);
      }
    };

    fetchCart();
  }, [userDetail?.uid]); // dependencies

  return (
    <>
      {loading ? (
        // 🔄 Show spinner while fetching cart
        <div className="spinner-container">
          <GridLoader color="#36d7b7" loading={loading} size={20} />
        </div>
      ) : (
        <div className="cart-Container">
          {/* 🛒 Cart Summary */}
          <CartTotal />

          {/* 🛍️ Cart Items */}
          <div className="cartList">
            {cart.length > 0 ? (
              cart.map((cartItem) => (
                <CartCard key={cartItem.id} item={cartItem} />
              ))
            ) : (
              <h2>Your Cart is Empty 🛒</h2>
            )}
          </div>
        </div>
      )}
    </>
  );
}
