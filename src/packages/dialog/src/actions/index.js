import TYPES from '../types';

export const open = (name, data = {}) => ({
    type: TYPES.OPEN,
    name,
    data,
});

export const close = (name) => ({
    type: TYPES.CLOSE,
    name,
});

export const set = (name, data) => ({
    type: TYPES.SET,
    name,
    data,
});