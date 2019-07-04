import React from 'react';
import {Link} from 'next.js/routes';

export default React.forwardRef((props, ref) => {

    const {
        as,
        href,
        params,
        children,
        route,
        ...otherProps
    } = props;

    return (
        <Link
            route={route}
            as={as}
            href={href}
            params={params}
        >
            <a
                ref={ref}
                {...otherProps}
            >
                {children}
            </a>
        </Link>
    );
});