import {compose, flattenProp} from 'recompose';
import Category from '../../components/Category';
import CategorySingleCategoryRelay from './CategorySingleCategoryRelay';

export default compose(
    CategorySingleCategoryRelay,
    flattenProp('data'),
)(Category);
