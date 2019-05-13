import {compose,flattenProp} from 'recompose';
import CategoryNews from '../../components/CategoryNews';
import HomeCategoryNewsRelay from './HomeCategoryNewsRelay';

export default compose(
    HomeCategoryNewsRelay,
    flattenProp('data'),
)(CategoryNews);
