import {compose,flattenProp} from 'recompose';
import Category from '../../components/Category';
import HomeCategoryRelay from './HomeCategoryRelay';

export default compose(
    HomeCategoryRelay,
    flattenProp('data'),
)(Category);
