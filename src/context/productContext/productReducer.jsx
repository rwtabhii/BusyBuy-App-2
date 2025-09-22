

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
  const { price, categories, search } = action.payload;

  let filtered = [...state.allProducts];
  let storeFilterItem =[...state.allProducts];

  // filter by price
  if (price !== undefined) {
    filtered = filtered.filter((p) => p.price <= price);
  }

  // filter by categories (if any checked)
  const activeCategories = Object.keys(categories || {}).filter(
    (c) => categories[c] === true
  );
  if (activeCategories.length > 0) {
    filtered = filtered.filter((p) =>
      activeCategories.includes(p.category)
    );
   storeFilterItem = [filtered];
  }

  // filter by search query
  if (search && search.trim() !== "") {
    const query = search.toLowerCase().trim();
     const result = storeFilterItem.filter((p) =>
      p.title.toLowerCase().includes(query)
    );
    if(result === 0){
      return []
    }
    filtered = result;
  }

  return {
    ...state,
    showProducts: filtered,
    searchProducts: filtered
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

      const searchProduct = state.allProducts.filter((product) =>
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