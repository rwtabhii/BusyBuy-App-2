import { CartTotal } from "../../component/cart/cartTotal/cartTotal"
import { CartCard } from "../../component/cart/cartCard/cartCard"
import "./cart.css"

const cartitems = [
    { id: 1, title: "Fjallraven Backpack", price: 1099, image: "https://picsum.photos/seed/p1/300/300" },
    { id: 2, title: "Men's T-Shirt", price: 799, image: "https://picsum.photos/seed/p2/300/300" },
    { id: 3, title: "Cotton Jacket", price: 1499, image: "https://picsum.photos/seed/p3/300/300" },
    { id: 4, title: "Slim Fit Shirt", price: 1299, image: "https://picsum.photos/seed/p4/300/300" },
    { id: 5, title: "Gold Bracelet", price: 5599, image: "https://picsum.photos/seed/p5/300/300" },
    { id: 6, title: "Petite Necklace", price: 2499, image: "https://picsum.photos/seed/p6/300/300" },
]
export function CartPage() {
    return (
        <div className="cart-Container">
            <CartTotal />
            <div className="cartList">
                {
                    cartitems.map((cartitem) => (
                        <CartCard key={cartitem.id} item={cartitem} />
                    ))
                }
            </div>
            
        </div>
    )
}