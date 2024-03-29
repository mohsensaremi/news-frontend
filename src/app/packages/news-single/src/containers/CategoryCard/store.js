import {connect} from 'react-redux';
import {open} from 'packages/dialog';

export default connect(
    store => ({
        user: store.globalState.get('user', null),
    }),
    dispatch => ({
        openAuthDialog: (onSuccessLogin) => dispatch(open('auth', {onSuccess: onSuccessLogin})),
    })
);
