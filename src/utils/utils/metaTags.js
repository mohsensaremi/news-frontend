import React from 'react';
import omit from "lodash/omit";

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
            content: "کارناوال,ایرانگردی,مجله گردشگری,طبیعت ایران,آبشار های ایران,اماکن تاریخی ایران,سفرهای تفریحی,سفر های ماجراجویانه و هیجانی,طبیعت گردی,مراکز خرید استانبول,مراکز خرید دبی,راهنمای سفر به,هزینه های سفر,جاذبه های گردشگری,سفر رمانتیک ماه عسل,",
        },
        {
            key: "description",
            name: "description",
            content: "کارناوال : معرفی ، نقد و بررسی جاذبه های گردشگری ایران و جهان  ، سفرنامه و راهنمای سفر ،  تماشای ویدیو و تصاویر با کیفیت از جاذبه های توریستی و طبیعت گردی",
        },
        {
            key: "og:title",
            property: "og:title",
            content: "کارناوال − راهنمای سفر",
        },
        {
            key: "og:description",
            property: "og:description",
            content: "کارناوال : معرفی ، نقد و بررسی جاذبه های گردشگری ایران و جهان  ، سفرنامه و راهنمای سفر ،  تماشای ویدیو و تصاویر با کیفیت از جاذبه های توریستی و طبیعت گردی",
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
            content: "کارناوال − راهنمای سفر",
        },
        {
            key: "twitter:image:alt",
            name: "twitter:image:alt",
            content:  "کارناوال − راهنمای سفر",
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