import React from 'react';
import MainLayout from 'app/layouts/MainLayout';
import Category from 'app/packages/category-single/src/renderers/Category';
import withData from "app/relay/ssr/withData";
import query from "app/packages/toolbar/src/renderers/ToolbarItems/ToolbarToolbarItemsQuery";
import query2 from "app/packages/category-single/src/renderers/Category/CategorySingleCategoryQuery";

const CategoryPage = (props) => {

    const {
        relayVariables
    } = props;

    return (
        <MainLayout>
            <Category
                relayVariables={relayVariables[0]}
            />
        </MainLayout>
    );
};

CategoryPage.getInitialProps = async (ctx) => {

    const mainLayoutData = await MainLayout.getInitialProps(ctx);

    return {
        relayVariables: [
            {
                id: ctx.query.id,
                first: 20,
            },
            mainLayoutData.relayVariables,
        ]
    };
};

export default withData(CategoryPage, {
    query: [query2, query],
    abort404: [
        (props) => props.categoryById === null,
    ]
});