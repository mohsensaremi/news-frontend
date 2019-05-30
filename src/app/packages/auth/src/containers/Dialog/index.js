import {compose} from 'recompose';
import Dialog from '../../components/Dialog';
import {withDialog} from 'packages/dialog';
import {reduxForm} from 'redux-form';
import handlers from './handlers';

export default compose(
    withDialog({
        name: 'auth',
    }),
    reduxForm({
        form: 'auth',
    }),
    handlers,
)(Dialog);
