import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  showProducts: [],
  searchProducts: [],
  previousSearchProducts: [],
   filterObj: {
    price: 75000,
    categories: {}, // {electronics: true, fashion: false}
    search: "",
  },
// keep previous for search reset
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.allProducts = action.payload;
      state.showProducts = action.payload;
      state.previousSearchProducts = action.payload;
    },
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
      state.showProducts.push(action.payload);
    },
     filterProduct: (state, action) => {
      // merge new filter values into filterObj
      state.filterObj = { ...state.filterObj, ...action.payload };

      const { price, categories, search } = state.filterObj;
      let filtered = [...state.allProducts];

      // filter by price
      if (price !== null && price !== undefined) {
        filtered = filtered.filter((p) => p.price <= price);
      }

      // filter by categories
      const activeCategories = Object.keys(categories || {}).filter(
        (c) => categories[c] === true
      );
      if (activeCategories.length > 0) {
        filtered = filtered.filter((p) => activeCategories.includes(p.category));
      }

      // filter by search
      if (search && search.trim() !== "") {
        const query = search.toLowerCase().trim();
        filtered = filtered.filter((p) =>
          p.title.toLowerCase().includes(query)
        );
      }

      state.showProducts = filtered;
      state.searchProducts = filtered;
    },
    search: (state, action) => {
      const query = action.payload.toLowerCase().trim();
      if (query === "") {
        state.showProducts = state.previousSearchProducts;
      } else {
        const searchProduct = state.allProducts.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
        state.showProducts = searchProduct;
      }
    },
  },
});

// export actions
export const { getProduct, addProduct, filterProduct, search } = productSlice.actions;

// selector
export const productSelector = (state) => state.products;

// export reducer
export const productReducer = productSlice.reducer;
