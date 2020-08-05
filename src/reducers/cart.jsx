import * as types from '../constants';

const initialState = {
    boughtItems: []
}

export default function cart(state = initialState,action) {
    switch (action.type) {
        case types.GET_BOUGHT_ITEM_SUCCESS:
            return {
                ...state,
                boughtItems: action.payload
            };
        case types.BUY_ITEM_SUCCESS:
            if (state.boughtItems.filter(item => item.id === action.id)){
                let objIndex = state.boughtItems.findIndex(item => item.id === action.id)

                {console.log(state.boughtItems)}
                return {
                    ...state,
                    boughtItems: [state.boughtItems[objIndex].id = +state.boughtItems[objIndex].id + +1]
                }
            } else {
                return {
                    ...state,
                    boughtItems: state.boughtItems, action
                }
            }
        default:
            return state
    }
}