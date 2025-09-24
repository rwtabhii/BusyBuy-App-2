import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css";
import { getProduct } from "../../api/products/products";
import { useProductValue } from "../../context/productContext/productContext";

export function Home() {
  const { dispatchProduct } = useProductValue();
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products on initial render
  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProduct();

        // Dispatch to context → updates global product state
        dispatchProduct({ type: "GET_PRODUCT", payload: productsData });
      } catch (err) {
        console.error("❌ Failed to fetch products:", err);
      } finally {
        // Always stop loading (success or error)
        setLoading(false);
      }
    }

    fetchProducts();
  }, [dispatchProduct]); // dependency for safety

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
                dispatchProduct({
                  type: "FILTER_PRODUCT",
                  payload: { search: e.target.value },
                })
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
