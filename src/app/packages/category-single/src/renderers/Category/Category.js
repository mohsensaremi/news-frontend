import React from 'react';
import SSRQueryRenderer from 'app/relay/ssr/SSRQueryRenderer';
import {getClientEnvironment} from 'app/relay/environment';
import CategoryContainer from '../../containers/Category';
import query from './CategorySingleCategoryQuery';
import {ErrorReload} from 'app/packages/error';
import {SetGlobalState} from "packages/global-state";

const Category = (props) => {

    const {
        relayVariables,
        router,
    } = props;

    const categoryId = router.query.id;

    return (
        <React.Fragment>
            <SetGlobalState
                itemKey={"activeMenu"}
                itemValue={categoryId}
            />
            <SSRQueryRenderer
                query={query}
                environment={getClientEnvironment()}
                variables={relayVariables}
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
