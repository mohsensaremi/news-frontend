import {withHandlers} from "recompose";

export default withHandlers({
    onClickMore: ({setLoading,relay}) => () => {
        if (!relay.hasMore()) {
            console.log(`Nothing more to load`);
            return
        } else if (relay.isLoading()) {
            console.log(`Request is already pending`);
            return
        }

        setLoading(true);
        relay.loadMore(5, () => {
            setLoading(false);
        })
    },
})