import React from 'react';
import {QueryRenderer} from 'react-relay';
import environment from 'app/relay/environment';
import CategoryContainer from '../../containers/Category';
import query from './CategorySingleCategoryQuery';
import {ErrorReload} from 'app/packages/error';
import {SetGlobalState} from "packages/global-state";

const Category = (props) => {

    const {
        match,
    } = props;

    const categoryId = match.params.id;

    return (
        <React.Fragment>
            <SetGlobalState
                itemKey={"activeMenu"}
                itemValue={categoryId}
            />
            <QueryRenderer
                query={query}
                environment={environment}
                variables={{
                    id: categoryId,
                    first: 20,
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
                            <CategoryContainer
                                categoryId={categoryId}
                                data={props.categoryById}
                            />
                        );
                    } else {
                        return (
                            null
                        );
                    }
                }}
            />
        </React.Fragment>
    );
};

export default Category;
