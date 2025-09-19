

export function productReducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCT": {
      return {
        ...state,
        allProducts: action.payload,
        showProducts: action.payload,
        previousSearchProducts: action.payload
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        showProducts: [...state.showProducts, action.payload], // also update filtered view
      };
    }
    case "FILTER_PRODUCT": {
      const { price, categories } = action.payload;

      let filtered = [...state.allProducts];

      // filter by price
      filtered = filtered.filter((p) => p.price <= price);

      // filter by categories (if any checked)
      const activeCategories = Object.keys(categories).filter(
        (c) => categories[c] === true
      );
      // console.log(activeCategories)
      if (activeCategories.length > 0) {
        filtered = filtered.filter((p) =>
          activeCategories.includes(p.category)
        );
      }

      return {
        ...state,
        showProducts: filtered,
       previousSearchProducts: filtered
      };
    }
    case "SEARCH": {
      const query = action.payload.toLowerCase().trim();
      // If input is empty, reset to all products
      if (query === "") {
        return {
          ...state,
          showProducts: state.previousSearchProducts
        };
      }

      const searchProduct = state.showProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      );

      return {
        ...state,
        showProducts: searchProduct,
      };
    }
    default:
      return state;

  }
} 