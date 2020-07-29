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
        default:
            return state
    }
}