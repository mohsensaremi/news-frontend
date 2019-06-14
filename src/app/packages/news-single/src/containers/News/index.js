import {compose, flattenProp} from 'recompose';
import News from '../../components/News';
import NewsSingleNewsRelay from './NewsSingleNewsRelay';
import lifecycle from './lifecycle';

export default compose(
    NewsSingleNewsRelay,
    flattenProp('data'),
    lifecycle,
)(News);
