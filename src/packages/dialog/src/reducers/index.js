import TYPES from '../types';

export default (state = {}, action) => {
    switch (action.type) {
        case TYPES.OPEN:
        case TYPES.CLOSE:
        case TYPES.SET:
            return {
                ...state,
                [action.name]: dialog(state[action.name], action),
            };
        default:
            return state;
    }
};

export const initialDialog = {
    open: false,
    data: {},
};

const dialog = (state = initialDialog, action) => {
    switch (action.type) {
        case TYPES.OPEN:
            return {
                ...state,
                open: true,
                data: action.data,
            };
        case TYPES.SET:
            return {
                ...state,
                ...action.data,
            };
        case TYPES.CLOSE:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

