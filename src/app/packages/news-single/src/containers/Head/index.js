import {compose} from 'recompose';
import Head from '../../components/Head';
import NewsSingleHeadRelay from './NewsSingleHeadRelay';
import {withRouter} from 'next/router';

export default compose(
    NewsSingleHeadRelay,
    withRouter,
)(Head);
