import {compose} from 'recompose';
import ToolbarItems from './ToolbarItems';
import style from './style';
import store from './store';

export default compose(
    store,
    style,
)(ToolbarItems);
