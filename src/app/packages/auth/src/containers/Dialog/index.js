import {compose} from 'recompose';
import Dialog from '../../components/Dialog';
import {withDialog} from 'packages/dialog';
import {withGlobalState} from 'packages/global-state';
import {reduxForm} from 'redux-form';
import handlers from './handlers';

export default compose(
    withDialog({
        name: 'auth',
    }),
    reduxForm({
        form: 'auth',
    }),
    withGlobalState,
    handlers,
)(Dialog);
