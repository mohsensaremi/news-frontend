import {compose} from 'recompose';
import List from '../../components/List';
import MemberQuestionListRelay from './MemberQuestionListRelay';

export default compose(
    MemberQuestionListRelay,
)(List);
