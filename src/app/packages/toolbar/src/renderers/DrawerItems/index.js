import {compose} from 'recompose';
import DrawerItems from './DrawerItems';
import style from './style';
import store from './store';
import handlers from '../ToolbarItems/handlers';
import {withGlobalState} from 'packages/global-state';

export default compose(
    withGlobalState,
    store,
    handlers,
    style,
)(DrawerItems);
