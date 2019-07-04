import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';
import PropTypes from 'prop-types';

export default function (WrappedComponent) {
    function EnhancedComponent(props, {ua}) {
        const {...otherProps} = props;
        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('md'));

        return (
            <WrappedComponent
                {...otherProps}
                isMobile={ua.uaResults.mobile || matches}
            />
        )
    }

    EnhancedComponent.contextTypes = {
        ua: PropTypes.object,
    };

    return EnhancedComponent;
}