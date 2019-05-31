import {compose, flattenProp} from 'recompose';
import CategoryCard from '../../components/CategoryCard';
import NewsSingleCategoryCardRelay from './NewsSingleCategoryCardRelay';
import store from './store';

export default compose(
    NewsSingleCategoryCardRelay,
    flattenProp('data'),
    store,
)(CategoryCard);
