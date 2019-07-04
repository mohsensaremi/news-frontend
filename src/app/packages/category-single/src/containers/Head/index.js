import {compose} from 'recompose';
import Head from '../../components/Head';
import CategorySingleHeadRelay from './CategorySingleHeadRelay';
import {withRouter} from 'next/router';

export default compose(
    CategorySingleHeadRelay,
    withRouter,
)(Head);
