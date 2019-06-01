import {compose, withState} from 'recompose';
import Paginate from '../../components/Paginate';
import NewsListPaginateRelay from './NewsListPaginateRelay';
import handlers from './handlers';

export default compose(
    NewsListPaginateRelay,
    withState('loading', 'setLoading', false),
    handlers,
)(Paginate);
