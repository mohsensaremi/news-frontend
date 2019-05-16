import {compose, flattenProp} from 'recompose';
import Design2 from '../../components/Design2';
import NewsDesignDesign2Relay from './NewsDesignDesign2Relay';

export default compose(
    NewsDesignDesign2Relay,
    flattenProp('data'),
)(Design2);
