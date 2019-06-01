import {compose} from 'recompose';
import List from '../../components/List';
import NewsListListRelay from './NewsListListRelay';

export default compose(
    NewsListListRelay,
)(List);
