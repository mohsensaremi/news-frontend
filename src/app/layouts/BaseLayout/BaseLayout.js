import React from 'react';
import {Toast} from 'packages/toast';

const BaseLayout = (props) => {

    const {
        children,
    } = props;

    return (
        <React.Fragment>
            {children}
            <Toast/>
        </React.Fragment>
    );
};

export default BaseLayout;
