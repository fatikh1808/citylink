import * as types from '../constants';

export function stepperGo(action) {
    return {
        type: types.STEPPER_MOTION,
        name: action.name,
        motion: action.motion,
        secondName: action.secondName,
        secondMotion: action.secondMotion
    }
}
