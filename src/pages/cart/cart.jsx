import { GridLoader } from "react-spinners"
import { CartTotal } from "../../component/cart/cartTotal/cartTotal"
import { CartCard } from "../../component/cart/cartCard/cartCard"
import "./cart.css"
import { useEffect, useState } from "react"
import { getCartItemApi } from "../../api/cart/cart"
import { useCartValue } from "../../context/cartContext/cartContext"
import { useAuthValue } from "../../context/authContext/authContext"


export function CartPage() {
    const { cart, dispatchCart } = useCartValue();
    const { userDetail } = useAuthValue()
    const [loding,setLoding] = useState(true)
    useEffect(() => {
        const fetchCart = async () => {
            try {
                // console.log(userDetail.uid);
                const cartItems = await getCartItemApi(userDetail.uid);
                dispatchCart({ type: "GET_CART_ITEM", payload: cartItems })
                setLoding(false);
                //  console.log("fetch cart item :", cartItems)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    }, [])
    return (<>

        {
            loding ? (
                <div className="spinner-container" >
                    <GridLoader color="#36d7b7" loading={loding} size={20} />
                </div>
            )
                :
                (<div className="cart-Container">
                    <CartTotal />
                    <div className="cartList">
                        {cart.length > 0 ? cart.map((cartitem) => (
                            <CartCard key={cartitem.id} item={cartitem} />
                        ))
                            : <h2>Your Cart is empty</h2>
                        }
                    </div>

                </div>)
        }
    </>)
}