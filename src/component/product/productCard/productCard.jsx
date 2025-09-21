  import { useAuthValue } from "../../../context/authContext/authContext";
  import { useNavigate } from "react-router-dom";
  import { useCartValue } from "../../../context/cartContext/cartContext";
  import { addCartItemApi } from "../../../api/cart/cart.js";
  import { toast } from "react-toastify";
  import "./productCard.css"

  export function ProductCard({product}){
    const {login,userDetail} = useAuthValue()
    const navigate = useNavigate();
    const {dispatchCart} = useCartValue();

    const addToCart=async(product)=>{
      try{
        const item = {
          userId : userDetail.uid,
          title : product.title,
          quantity : 1,
          price : product.price,
          image : product.image
        }
        console.log(item);
         await addCartItemApi(item);
         dispatchCart({type:"ADD_CART_ITEM",payload:item});
         toast.success("Product add successfully");
      }
      catch(error){
        toast.error("Error in adding the Product")
        console.log(error);
      }
    }

    return (
      <div className="productCard">
        <div className="imageContainer">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
        </div>

        <div className="productDetails">
          <p className="productName">{product.title}</p>
          <p className="productPrice">₹ {product.price}</p>

          <button className="addBtn" onClick={() => login?addToCart(product):navigate("/login")}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  }