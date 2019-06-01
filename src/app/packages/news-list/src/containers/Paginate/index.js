import {compose, withState} from 'recompose';
import Paginate from '../../components/Paginate';
import MemberQuestionPaginateRelay from './MemberQuestionPaginateRelay';
import handlers from './handlers';

export default compose(
    MemberQuestionPaginateRelay,
    withState('loading', 'setLoading', false),
    handlers,
)(Paginate);
