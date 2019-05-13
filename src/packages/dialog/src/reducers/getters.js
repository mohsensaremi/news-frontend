const defaultState = {
    open: false,
    onClose: () => null,
};

export const getDialog = (name) => (state) => {
    return state.dialog[name] || defaultState;
};

export const getDialogOpen = (name) => {
    const dialogGetter = getDialog(name);
    return (state) => {
        return dialogGetter(state).open;
    };
};

export const getDialogData = (name) => {
    const dialogGetter = getDialog(name);
    return (state) => {
        return dialogGetter(state).data;
    };
};
