export function cartReducer(state, action) {
    switch (action.type) {
        case "GET_CART_ITEM": {
            return action.payload
        }

        case "ADD_CART_ITEM": {
            return [...state, action.payload]
        }
        case "REMOVE_CART_ITEM": {
            const item = action.payload;
            //  console.log("reducer item :",item);
            return state.filter((i) => i.id !== item.id);
        }
        case "INCREMENT_QUANTITY": {
            const itemId = action.payload;
            return state.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }

        case "DECREMENT_QUANTITY":
            return state
                .map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0); // remove item if quantity is 0
        default:
            return state;
    }
}