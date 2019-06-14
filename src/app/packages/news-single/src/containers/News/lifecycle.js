import {lifecycle} from "recompose";
import NewsSingleSubmitViewMutation from '../../mutations/NewsSingleSubmitViewMutation';

export default lifecycle({
    componentDidMount() {
        NewsSingleSubmitViewMutation({
            id: this.props._id,
        });
    }
})
