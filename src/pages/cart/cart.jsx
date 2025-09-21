import { CartTotal } from "../../component/cart/cartTotal/cartTotal"
import { CartCard } from "../../component/cart/cartCard/cartCard"
import "./cart.css"
import { useEffect } from "react"
import { getCartItemApi } from "../../api/cart/cart"
import { useCartValue } from "../../context/cartContext/cartContext"
import { useAuthValue } from "../../context/authContext/authContext"

export function CartPage() {
    const { cart, dispatchCart } = useCartValue();
    const { userDetail } = useAuthValue()
    useEffect(() => {
        const fetchCart = async () => {
            try {
                // console.log(userDetail.uid);
                const cartItems = await getCartItemApi(userDetail.uid);
                dispatchCart({ type: "GET_CART_ITEM", payload: cartItems })
                //  console.log("fetch cart item :", cartItems)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, [])
    return (
        <div className="cart-Container">
            <CartTotal />
            <div className="cartList">
               {cart.length>0?cart.map((cartitem) => (
                        <CartCard key={cartitem.id} item={cartitem} />
                    )) 
                    : <h2>Your Cart is empty</h2>
                }
            </div>

        </div>
    )
}