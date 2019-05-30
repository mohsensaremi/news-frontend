import {connect} from "react-redux";
import {open} from 'packages/dialog';

export default connect(
    null,
    dispatch => ({
        openAuthDialog: () => dispatch(open('auth')),
    })
)
