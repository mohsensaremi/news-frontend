import {connect} from "react-redux";
import {actions} from 'packages/global-state';

export default connect(
    store => ({
        open: store.globalState.get('drawerOpen', false),
    }),
    dispatch => ({
        onClose: () => dispatch(actions.set('drawerOpen', false)),
        onOpen: () => dispatch(actions.set('drawerOpen', true)),
    })
)
