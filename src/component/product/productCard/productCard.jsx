import { useNavigate } from "react-router-dom";
import { addCartItemApi } from "../../../api/cart/cart.js";
import { toast } from "react-toastify";
import "./productCard.css"
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../../redux/authReducer/authReducer.jsx";
import { addCartItem } from "../../../redux/cartReducer/cartReducer.jsx";

export function ProductCard({ product }) {
  const { login, userDetail } = useSelector(authSelector)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const addToCart = async (product) => {
    try {
      const item = {
        userId: userDetail.uid,
        title: product.title,
        quantity: 1,
        price: product.price,
        image: product.image
      }
      console.log(item);
      await addCartItemApi(item);
      dispatch(addCartItem(item));
      toast.success("Product add successfully");
    }
    catch (error) {
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

        <button className="addBtn" onClick={() => login ? addToCart(product) : navigate("/login")}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}