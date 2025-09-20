export function cartReducer(state, action) {
    switch (action.type) {
        case "GET-CART_ITEM": {
            return [action.payload]
        }

        case "ADD_CART_ITEM": {
            return [...state, action.payload]
        }
        case "REMOVE_CART_ITEM": {
            const { id } = action.payload;
            return state.filter((item) => item.id !== id);
        }
        case "UPDATE_CART_QUANTITY": {
            const { id, quantity } = action.payload;
            return state.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
        }
        default:
            return state;
    }
}