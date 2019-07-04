import React from 'react';
import {Link} from 'next.js/routes';

export default React.forwardRef((props, ref) => {

    const {
        as,
        href,
        params,
        children,
        route,
        shalllow,
        ...otherProps
    } = props;

    return (

            <a
                ref={ref}
                {...otherProps}
            >
                {children}
            </a>
    );
});