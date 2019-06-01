import {compose} from 'recompose';
import ToolbarItems from './ToolbarItems';
import style from './style';
import store from './store';
import handlers from './handlers';
import {withGlobalState} from 'packages/global-state';

export default compose(
    withGlobalState,
    store,
    handlers,
    style,
)(ToolbarItems);
