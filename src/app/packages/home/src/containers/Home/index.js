import {compose} from 'recompose';
import Home from '../../components/Home';
import HomeHomeRelay from './HomeHomeRelay';

export default compose(
    HomeHomeRelay,
)(Home);
