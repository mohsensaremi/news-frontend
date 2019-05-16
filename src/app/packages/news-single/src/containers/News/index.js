import {compose, flattenProp} from 'recompose';
import News from '../../components/News';
import NewsSingleNewsRelay from './NewsSingleNewsRelay';

export default compose(
    NewsSingleNewsRelay,
    flattenProp('data'),
)(News);
