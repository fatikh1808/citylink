
const initialState = {
    boughtItems: []
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUY_ITEM':
            return {...state.boughtItems, boughtItems: [ ...state.boughtItems, action.payload]};

        case 'DELETE_ITEM': {
            let itemId = action.payload.id;

            let newTools = state.buyTools.filter(function (action) {
                return action.id !== itemId;
            });
            return {buyTools: newTools}
        }

        default:
            return state
    }
}