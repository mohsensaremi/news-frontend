import React from 'react';
import MemberLayout from 'app/layouts/MemberLayout';
import MainLayout from 'app/layouts/MainLayout';
import MemberPhotos from 'app/packages/member-photos/src/containers/Photos';
import MemberPhotosSinglePage from 'app/packages/member-photo-single/src/components/Page';

const MemberPhotosPage = (props) => {

    const {
        memberFromRoute,
        photoId,
    } = props;

    return memberFromRoute ? (
        <MemberLayout memberFromRoute={memberFromRoute}>
            <MemberPhotos/>
        </MemberLayout>
    ) : (
        <MainLayout>
            <MemberPhotosSinglePage photoId={photoId}/>
        </MainLayout>
    );
};

MemberPhotosPage.getInitialProps = async (ctx) => {
    const props = await MemberLayout.getInitialProps(ctx);
    return {
        ...props,
        photoId: ctx.query.photoId,
    }
};

export default MemberPhotosPage;