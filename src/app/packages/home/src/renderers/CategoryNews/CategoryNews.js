import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import query from './HomeCategoryNewsQuery';
import {ErrorReload} from 'app/packages/error';
import CategoryNewsContainer from '../../containers/CategoryNews';
import Loading from '../../components/CategoryNews/Loading';

const CategoryNews = (props) => {

    const {
        categoryId,
    } = props;

    return (
        <QueryRenderer
            query={query}
            environment={environment}
            variables={{
                id: categoryId,
            }}
            render={({props, error, retry}) => {
                if (error) {
                    return (
                        <ErrorReload
                            onReload={retry}
                        />
                    );
                } else if (props) {
                    return (
                        props.categoryById &&
                        (
                            <CategoryNewsContainer
                                data={props.categoryById}
                            />
                        )
                    );
                } else {
                    return (
                        <Loading/>
                    );
                }
            }}
        />
    );
};

export default CategoryNews;
