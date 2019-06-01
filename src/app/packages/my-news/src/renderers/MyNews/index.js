import {compose} from 'recompose';
import MyNews from './MyNews';
import style from './style';

export default compose(
    style,
)(MyNews);
