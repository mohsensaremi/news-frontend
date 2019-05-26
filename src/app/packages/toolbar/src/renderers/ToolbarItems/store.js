import {connect} from 'react-redux';

export default connect(
    state => ({
        activeCategoryId: state.globalState.get('activeCategoryId', false),
    }),
)
