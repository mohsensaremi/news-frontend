import {compose, flattenProp} from 'recompose';
import CategoryCard from '../../components/CategoryCard';
import NewsSingleCategoryCardRelay from './NewsSingleCategoryCardRelay';

export default compose(
    NewsSingleCategoryCardRelay,
    flattenProp('data'),
)(CategoryCard);
