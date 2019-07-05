import {compose} from 'recompose';
import Drawer from '../../components/Drawer';
import store from './store';

export default compose(
    store,
)(Drawer);
