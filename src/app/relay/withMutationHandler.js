import {compose, withHandlers} from "recompose";
import {withToast} from "packages/toast";

export default compose(
    withToast,
    withHandlers({
        mutationHandler: ({openToast}) => (promise, options = {errorMessage: true, successMessage: true}) => {
            return promise
                .then(res => {

                    if (options.successMessage) {
                        openToast({
                            variant: 'success',
                            messages: res.messages,
                        });
                    }

                    return res;
                })
                .catch(e => {
                    if (options.errorMessage) {
                        openToast({
                            variant: 'error',
                            messages: e.source.errors.map(({message}) => message).filter(x => !!x),
                        });
                    } else {
                        throw e;
                    }
                });
        },
    }),
)
