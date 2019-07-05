import {compose} from 'recompose';
import Toolbar from './Toolbar';
import style from './style';
import {withIsMobile} from 'packages/is-mobile';

export default compose(
    style,
    withIsMobile,
)(Toolbar);
