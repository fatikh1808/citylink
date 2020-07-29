import * as types from '../constants';

const token = localStorage.getItem('token')

const initialState = {

    isAuthenticated: !!token,
    userId: null,
    token,

}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.AUTH_SUBMIT_SUCCESS:
        case types.REGISTER_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                userId: action.payload[0].id,
                token: action.payload[0].token
            };
        case types.AUTH_SUBMIT_FAILURE:
        case types.REGISTER_SUBMIT_FAILURE:
        case types.LOGOUT_SUBMIT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: ''
            };

        default:
            return state
    }
}