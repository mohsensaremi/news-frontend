import React from 'react';

export const getMetaTags = (options={})=>{

    const items =  [
        {
            key: "httpEquiv",
            httpEquiv: "content-language",
            content: "fa",
        },
        {
            key: "keywords",
            name: "keywords",
            content: "خبرجو − آرشیو اخبار ایران و جهان",
        },
        {
            key: "description",
            name: "description",
            content: "خبرجو − آرشیو اخبار ایران و جهان",
        },
        {
            key: "og:title",
            property: "og:title",
            content: "خبرجو − آرشیو اخبار ایران و جهان",
        },
        {
            key: "og:description",
            property: "og:description",
            content: "خبرجو − آرشیو اخبار ایران و جهان",
        },
        {
            key: "og:image",
            property: "og:image",
            content: `${process.env.CDN_URL}/img/aboutus-logo-bg.jpg`,
        },
        {
            key: "og:url",
            property: "og:url",
            content: `${process.env.APP_URL}`,
        },
        {
            key: "twitter:card",
            property: "twitter:card",
            content: "summary_large_image",
        },
        {
            key: "og:site_name",
            property: "og:site_name",
            content: "خبرجو − آرشیو اخبار ایران و جهان",
        },
        {
            key: "twitter:image:alt",
            name: "twitter:image:alt",
            content:  "خبرجو − آرشیو اخبار ایران و جهان",
        },
    ];

    return items.map(item=>{
        if(options[item.key]){
            return {
                ...item,
                ...options[item.key],
            };
        }

        return item;
    });
};

export const getMetaTagsJsx = (options)=>{
    const tags =getMetaTags(options);
    return (
        <React.Fragment>
            <meta {...tags[0]} />
            <meta {...tags[1]} />
            <meta {...tags[2]} />
            <meta {...tags[3]} />
            <meta {...tags[4]} />
            <meta {...tags[5]} />
            <meta {...tags[6]} />
            <meta {...tags[7]} />
            <meta {...tags[8]} />
            <meta {...tags[9]} />
        </React.Fragment>
    );
};