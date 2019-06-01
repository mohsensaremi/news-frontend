import {compose, withState} from 'recompose';
import Paginate from '../../components/Paginate';
import NewsListPaginateMyNewsRelay from './NewsListPaginateMyNewsRelay';
import handlers from '../Paginate/handlers';

export default compose(
    NewsListPaginateMyNewsRelay,
    withState('loading', 'setLoading', false),
    handlers,
)(Paginate);
