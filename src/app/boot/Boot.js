import React from 'react';
import RTL from 'utils/components/RTL';

const Boot = (props) => {

    const {
        children
    } = props;

    return (
        <RTL>
            <React.Fragment>
                {children}
            </React.Fragment>
        </RTL>
    );
};

export default Boot;
