import {compose} from 'recompose';
import Category from './Category';
import style from './style';
import {withRouter} from 'next/router';

export default compose(
    withRouter,
    style,
)(Category);
