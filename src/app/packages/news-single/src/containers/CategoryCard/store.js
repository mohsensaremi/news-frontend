import {connect} from 'react-redux';
import {open} from 'packages/dialog';

export default connect(
    store => ({
        user: store.globalState.get('user', null),
        userLoading: store.globalState.get('userLoading', false),
    }),
    dispatch => ({
        openAuthDialog: () => dispatch(open('auth')),
    })
);
