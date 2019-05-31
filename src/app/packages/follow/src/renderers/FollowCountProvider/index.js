import {compose,withState} from 'recompose';
import FollowCountProvider from './FollowCountProvider';
import handlers from './handlers';

export default compose(
    withState('loading','setLoading',false),
    handlers,
)(FollowCountProvider);
