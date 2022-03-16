const defaultState = {
    selectedItems: {
        items: [],
        restaurantname: ''
    }
}

export const cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': 
            return {
                ...state,
                selectedItems: {
                    items: [...state.selectedItems.items, action.payload],// pusheamos el nuevo item al array actual
                    restaurantName: action.payload.restaurantName
                }
            }
        case 'REMOVE_FROM_CART': {
            // De los que hay en la lista devuelvo todos los elementos que no coincidan con el title del producto que quremos quitar
            const itemsFiltered = state.selectedItems.items.filter(item => item.title !== action.payload.title)
            return {
                ...state,
                selectedItems: {
                    items: itemsFiltered,// pusheamos el nuevo item al array actual
                    restaurantName: action.payload.restaurantName
                }
            }
        }            
        default:
            return state;
    }

}