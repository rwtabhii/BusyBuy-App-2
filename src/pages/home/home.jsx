import { FilterProduct } from "../../component/filterProducts/filterProducts";
import { ProductList } from "../../component/product/productList/productList";
import "./home.css"

export function Home() {
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