import React from 'react';
import HomeLayout from 'app/layouts/HomeLayout';
import Near from 'app/packages/near/src/renderers/Near';

const NearPage = () => {

    return (
        <HomeLayout>
            <Near/>
        </HomeLayout>
    );
};

export default NearPage;