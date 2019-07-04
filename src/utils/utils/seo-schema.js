import * as locationUtils from './location';

export const getAggregateRatingByLikes = (likesCount) => {

    if (likesCount.likesCount + likesCount.dislikesCount > 0) {
        const total = likesCount.likesCount + likesCount.dislikesCount;
        return {
            "@type": "AggregateRating",
            "ratingValue": parseFloat(((likesCount.likesCount * 5) / total).toPrecision(2)),
            "reviewCount": total,
            "bestRating": "5",
            "worstRating": "0"
        };
    }
};

export const getPlace = (locations, city) => {

    const placeAddress = locations.map(item => item.title).join(',');

    return {
        "@type": "Place",
        "address": placeAddress,
        "geo": {
            "@type": "GeoCoordinates",
            "address": placeAddress,
            "latitude": city.lat,
            "longitude": city.lng,
        }
    }
};

export const getPlaceHierarchy = (place) => {
    const locations = locationUtils.getPlaceHierarchy(place);

    if (locations.length > 0) {
        return getPlace(locations, locations[locations.length - 1]);
    }
};


export const getPlaceOffers = (place) => {
    return [
        {
            "@type": "Offer",
            "name": "weather forecast",
            "url": place.weatherUrl,
        },
    ];
};


export const getProvider = () => {
    return {
        "@type": "Organization",
        "name": "Karnaval",
        "logo": {
            "@type": "ImageObject",
            "url": `${process.env.CDN_URL}/img/logo.jpg`,
            "width": 170
        }
    };
};

export const getPlaceBreadcrumbList = (locations) => {
    return {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": getPlaceBreadcrumbItems(locations),
    }
};


export const getPlaceBreadcrumbListHierarchy = (place) => {
    const locations = locationUtils.getPlaceHierarchy(place);
    return getPlaceBreadcrumbList(locations)
};

export const getPlaceBreadcrumbItems = (locations) => {
    return locations.map((location, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@id": location.url,
            "name": location.title,
        },
    }))
};

export const getPlaceBreadcrumbItemsHierarchy = (place) => {
    const locations = locationUtils.getPlaceHierarchy(place);
    return getPlaceBreadcrumbItems(locations)
};

export const getCollectionPage = ({title, description, keywords, url}) => {
    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        "@id": url,
        "url": url,
        "name": title,
        "description": description,
        "keywords": keywords,
    };
};
