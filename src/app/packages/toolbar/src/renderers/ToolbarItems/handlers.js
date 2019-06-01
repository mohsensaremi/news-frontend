import {withHandlers} from "recompose";

export default withHandlers({
    onChangeTab: ({setItem}) => (e, value) => {
        setItem('activeMenu', value);
    },
})
