import { CartTotal } from "../../component/cart/cartTotal/cartTotal"
import { CartCard } from "../../component/cart/cartCard/cartCard"
import "./cart.css"
import { useEffect } from "react"
import { getCartItemApi } from "../../api/cart/cart"
import { useCartValue } from "../../context/cartContext/cartContext"
import { useAuthValue } from "../../context/authContext/authContext"

export function CartPage() {
    const {cart, dispatchCart} = useCartValue();
    const {userDetail} = useAuthValue()
    useEffect(() => {
        const fetchCart = async () => {
            try {
                 const cartItems = await getCartItemApi(userDetail.uid);
                 dispatchCart({type:"ADD_CART_ITEM",payload:cartItems })
                 console.log(cartItems)
                toast.success("Cart load successfully");
            }
            catch(error){
                toast.error("Error in  loading the Cart")
                console.log(error);
            }
        }
        fetchCart();
    },[dispatchCart])
    return (
        <div className="cart-Container">
            <CartTotal />
            <div className="cartList">
                {
                    cart.map((cartitem) =>(
                        <CartCard key={cartitem.id} item={cartitem} />
                    ))
                }
            </div>

        </div>
    )
}