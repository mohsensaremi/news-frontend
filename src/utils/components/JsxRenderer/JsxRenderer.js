import React from 'react';

const JsxRenderer = (props) => {

    const {
        jsx,
        ...otherProps
    }=props;

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: jsx
            }}
            {...otherProps}
        />
    );
};

export default JsxRenderer;
