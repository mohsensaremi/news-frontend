import React from 'react';

const SeoSchema = ({schema}) => {

    return (
        <script type="application/ld+json"
                key="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
        />
    );
};

export default SeoSchema;