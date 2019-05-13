import {compose, flattenProp} from 'recompose';
import Design1 from '../../components/Design1';
import NewsDesignDesign1Relay from './NewsDesignDesign1Relay';

export default compose(
    NewsDesignDesign1Relay,
    flattenProp('data'),
)(Design1);
