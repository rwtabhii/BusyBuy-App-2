import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css";
import { getProductApi } from "../../api/products/products";
import { useDispatch } from "react-redux";
import { filterProduct, getProduct } from "../../redux/productReducer/productReducer";

export function Home() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products on initial render
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProductApi();

        // Dispatch to context → updates global product state
        dispatch(getProduct(productsData))
      } catch (err) {
        console.error("❌ Failed to fetch products:", err);
      } finally {
        // Always stop loading (success or error)
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // dependency for safety

  return (
    <div className="homecontainer">
      {/* Show spinner while fetching */}
      {loading ? (
        <div className="spinner-container">
          <GridLoader color="#36d7b7" loading={loading} size={20} />
        </div>
      ) : (
        <>
          {/* 🔎 Search Bar */}
          <div className="searchBar">
            <input
              type="search"
              placeholder="Search"
              className="searchInput"
              onChange={(e) =>
                dispatch(filterProduct({search : e.target.value}))
              }
            />
          </div>

          {/* Product Listing */}
          <div className="products">
            <FilterProduct />
            <ProductList />
          </div>
        </>
      )}
    </div>
  );
}
