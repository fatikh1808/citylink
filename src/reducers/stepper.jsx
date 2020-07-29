import * as types from '../constants';

const initialState = {
    firstCart: true,
    secondCart: false,
    thirdCart: false,
    fourthCart: false,
    fifthCart: false
};

export default function stepperReducer(state = initialState, action) {
    switch (action.type) {
        case types.STEPPER_MOTION:
            return {
                ...state,
                [action.name]: action.motion,
                [action.secondName]: action.secondMotion
            }
        case types.STEPPER_RESET:
            return state

        default:
            return state
    }
}