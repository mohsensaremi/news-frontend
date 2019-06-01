import {connect} from 'react-redux';
import {open} from "packages/dialog";

export default connect(
    state => ({
        activeMenu: state.globalState.get('activeMenu', false),
        hasUser: state.globalState.get('user', null) !== null,
    }),
    dispatch => ({
        openAuthDialog: () => dispatch(open('auth')),
    }),
)
