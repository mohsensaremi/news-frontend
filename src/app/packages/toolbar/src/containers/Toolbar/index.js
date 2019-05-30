import {compose} from 'recompose';
import Toolbar from '../../components/Toolbar';
import store from './store';

export default compose(
    store,
)(Toolbar);
