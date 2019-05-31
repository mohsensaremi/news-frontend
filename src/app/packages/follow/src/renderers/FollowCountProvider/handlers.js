import {withHandlers} from "recompose";
import FollowFollowMutation from '../../mutations/FollowFollowMutation';
import FollowUnfollowMutation from '../../mutations/FollowUnfollowMutation';

export default withHandlers({
    follow: ({id, type, setLoading}) => () => {
        setLoading(true);
        FollowFollowMutation({id, type}).finally(() => {
            setLoading(false);
        });
    },
    unfollow: ({id, type, setLoading}) => () => {
        setLoading(true);
        FollowUnfollowMutation({id, type}).finally(() => {
            setLoading(false);
        });
    },
});
