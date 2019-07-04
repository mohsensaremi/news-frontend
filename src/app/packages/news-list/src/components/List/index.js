import {compose} from 'recompose';
import List from './List';
import style from './style';
import {withIsMobile} from 'packages/is-mobile';

export default compose(
    withIsMobile,
    style,
)(List);
