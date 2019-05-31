import {withHandlers} from "recompose";
import AuthLoginRegisterMutation from '../../mutations/AuthLoginRegisterMutation';

export default withHandlers({
    onSubmit: ({setItem, onClose, reset, data: dialogData}) => (data) => {
        setItem('userLoading', true);
        return AuthLoginRegisterMutation(data).then(res => {
            setItem('user', res.loginRegisterUser.user);
            onClose();
            reset();
            window.localStorage.setItem('userToken', res.loginRegisterUser.token);
            if (dialogData && typeof dialogData.onSuccess === 'function') {
                dialogData.onSuccess(res.loginRegisterUser.user);
            }
        }).finally(() => {
            setItem('userLoading', false);
        });
    },
})
