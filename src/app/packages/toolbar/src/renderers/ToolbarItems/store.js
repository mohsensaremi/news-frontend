import {connect} from 'react-redux';
import {open} from "packages/dialog";

export default connect(
    state => ({
        activeCategoryId: state.globalState.get('activeCategoryId', false),
        hasUser: state.globalState.get('user', null) !== null,
    }),
    dispatch => ({
        openAuthDialog: () => dispatch(open('auth')),
    }),
)
