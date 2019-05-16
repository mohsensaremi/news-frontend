import {compose} from 'recompose';
import News from '../../components/News';
import NewsSingleNewsRelay from './NewsSingleNewsRelay';

export default compose(
    NewsSingleNewsRelay,
)(News);
