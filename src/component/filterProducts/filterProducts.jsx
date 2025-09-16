import { useState } from "react";
import "./filterProduct.css"

export function FilterProduct() {
    const [price, setPrice] = useState(75000);
    const [categories, setCategories] = useState({
        mensFashion: false,
        womensFashion: false,
        jewelery: false,
        electronics: false
    })
    console.log(categories);


    return (
        <div className="filter-container">
            <h2>Filter</h2>
            <form className="filterSidebar">
                {/* Price Slider */}
                <label htmlFor="price">
                    Price: ₹{price}
                </label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="1"
                    max="100000"
                    step="10"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="priceRange"
                />
                <h2 className="catergory">Category</h2>
                <div className="categoryContainer">
                    <div>
                        <input
                            type="checkbox"
                            id="mensFashion"
                            name="mensFashion"
                            onChange={(e)=>{
                                setCategories((prevCategory)=>(
                                    {...prevCategory,mensFashion: e.target.checked}
                                ))
                            }}
                        />
                        <label htmlFor="mensFashion">Men's Clothing</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="womensFashion"
                            name="womensFashion"
                            onChange={(e)=>{
                                setCategories((prevCategory)=>(
                                    {...prevCategory,womensFashion: e.target.checked}
                                ))
                            }}
                        />
                        <label htmlFor="womensFashion">Women's Clothing</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jewelery"
                            name="jewelery"
                            onChange={(e)=>{
                                setCategories((prevCategory)=>(
                                    {...prevCategory,jewelery: e.target.checked}
                                ))
                            }}
                        />
                        <label htmlFor="jewelery">Jewelery</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="electronics"
                            name="electronics"
                            onChange={(e)=>{
                                setCategories((prevCategory)=>(
                                    {...prevCategory,electronics: e.target.checked}
                                ))
                            }}
                        />
                        <label htmlFor="electronics">Electronics</label>
                    </div>
                </div>
            </form>
        </div>
    )
}