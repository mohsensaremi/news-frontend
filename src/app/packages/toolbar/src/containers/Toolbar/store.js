import {connect} from "react-redux";
import {open} from 'packages/dialog';
import {actions} from "packages/global-state/src/actions";

export default connect(
    store => ({
        user: store.globalState.get('user', null),
    }),
    dispatch => ({
        openAuthDialog: () => dispatch(open('auth')),
        openDrawer: () => dispatch(actions.set('drawerOpen', true)),
    })
)
