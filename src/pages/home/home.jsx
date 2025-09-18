
import { useAuthValue } from "../../context/authContext/authContext";
import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css"

export function Home() {
    const {login} = useAuthValue();
    return (
        <div className="homecontainer">
            <div className="searchBar">
                <input type="search" placeholder="Search" className="searchInput"
                    ></input>
            </div>
            <div className="products">
                <FilterProduct/>
                <ProductList/>
            </div>

        </div>
    )
}