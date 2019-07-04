import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'utils/redux-form/TextField';
import MuiDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Field} from "redux-form";

const Dialog = (props) => {

    const {
        classes,
        open,
        onClose,
        onSubmit,
        submitting,
        handleSubmit,
    } = props;

    return (
        <MuiDialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={"xs"}
        >
            <DialogTitle id="form-dialog-title">ورود / ثبت نام</DialogTitle>
            <DialogContent>
                <Field
                    component={TextField}
                    margin="dense"
                    label="ایمیل"
                    type="email"
                    name="email"
                    fullWidth
                />
                <Field
                    component={TextField}
                    margin="dense"
                    label="کلمه عبور"
                    type="password"
                    name="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    href={process.env.GOOGLE_AUTH_URL}
                    target={"_blank"}
                    disabled={submitting}
                    color="primary"
                    variant={"contained"}
                    className={classes.button}
                >
                    ورود با گوگل
                </Button>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    disabled={submitting}
                    color="primary"
                    variant={"contained"}
                    className={classes.button}
                >
                    ورود / ثبت نام
                </Button>
            </DialogActions>
        </MuiDialog>
    );
}

export default Dialog;
