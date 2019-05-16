import {compose, flattenProp} from 'recompose';
import RelatedNews from '../../components/RelatedNews';
import NewsSingleRelatedNewsRelay from './NewsSingleRelatedNewsRelay';

export default compose(
    NewsSingleRelatedNewsRelay,
    flattenProp('data'),
)(RelatedNews);
