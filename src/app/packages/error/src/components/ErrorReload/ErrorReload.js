import React from 'react';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';

const ErrorReload = (props) => {

    const {
        classes,
        onReload,
    } = props;

    return (
        <div className={classes.root}>
            <Typography display={"inline"} className={classes.text}>
                متاسفانه خطایی رخ داده، لطفاً دوباره تلاش کنید.
            </Typography>
            {
                onReload && (
                    <RefreshIcon
                        className={classes.icon}
                        onClick={onReload}
                    />
                )
            }
        </div>
    );
};

export default ErrorReload;
