import {compose, flattenProp} from 'recompose';
import SourceCard from '../../components/SourceCard';
import NewsSingleSourceCardRelay from './NewsSingleSourceCardRelay';

export default compose(
    NewsSingleSourceCardRelay,
    flattenProp('data'),
)(SourceCard);
