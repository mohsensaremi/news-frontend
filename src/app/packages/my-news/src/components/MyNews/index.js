import {compose} from 'recompose';
import MyNews from './MyNews';
import style from 'app/packages/category-single/src/components/Category/style';

export default compose(
    style,
)(MyNews);
