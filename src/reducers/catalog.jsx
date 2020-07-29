import * as types from '../constants';

const initialState = {
    catalog: []
}

export default function catalogReducer(state = initialState,action) {
    switch (action.type) {

        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                catalog: action.payload
            };
        default:
            return state
    }
}