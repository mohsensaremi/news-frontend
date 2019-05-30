import {withHandlers} from "recompose";
import AuthLoginRegisterMutation from '../../mutations/AuthLoginRegisterMutation';

export default withHandlers({
    onSubmit: ({setItem, onClose, reset}) => (data) => {
        setItem('userLoading', true);
        return AuthLoginRegisterMutation(data).then(res => {
            setItem('user', res.loginRegisterUser.user);
            onClose();
            reset();
            window.localStorage.setItem('userToken', res.loginRegisterUser.token);
        }).finally(() => {
            setItem('userLoading', false);
        });
    },
})
