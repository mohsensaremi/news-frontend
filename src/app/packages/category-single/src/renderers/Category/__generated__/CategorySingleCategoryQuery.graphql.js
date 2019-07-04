/**
 * @flow
 * @relayHash 33de4faff4ca136e812de922cf7b400b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategorySingleCategoryRelay_data$ref = any;
type CategorySingleHeadRelay_data$ref = any;
export type CategorySingleCategoryQueryVariables = {|
  id: string,
  first: number,
|};
export type CategorySingleCategoryQueryResponse = {|
  +categoryById: ?{|
    +$fragmentRefs: CategorySingleCategoryRelay_data$ref & CategorySingleHeadRelay_data$ref
  |}
|};
export type CategorySingleCategoryQuery = {|
  variables: CategorySingleCategoryQueryVariables,
  response: CategorySingleCategoryQueryResponse,
|};
*/


/*
query CategorySingleCategoryQuery(
  $id: String!
  $first: Int!
) {
  categoryById(id: $id) {
    ...CategorySingleCategoryRelay_data_3ASum4
    ...CategorySingleHeadRelay_data
    id
  }
}

fragment CategorySingleCategoryRelay_data_3ASum4 on Category {
  title
  topNews {
    id
    ...NewsDesignDesign1Relay_data
    ...NewsDesignDesign2Relay_data
  }
  ...NewsListPaginateRelay_data_3ASum4
}

fragment CategorySingleHeadRelay_data on Category {
  title
}

fragment NewsDesignDesign1Relay_data on News {
  title
  source {
    title
    id
  }
  category {
    title
    id
  }
  abstract
  _id
  pubDate
}

fragment NewsDesignDesign2Relay_data on News {
  title
  source {
    title
    id
  }
  category {
    title
    id
  }
  abstract
  _id
  pubDate
}

fragment NewsListPaginateRelay_data_3ASum4 on Category {
  news(first: $first) {
    edges {
      ...NewsListListRelay_data
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment NewsListListRelay_data on NewsEdge {
  node {
    id
    ...NewsDesignDesign1Relay_data
    ...NewsDesignDesign2Relay_data
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "source",
  "storageKey": null,
  "args": null,
  "concreteType": "NewsSource",
  "plural": false,
  "selections": (v5/*: any*/)
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "category",
  "storageKey": null,
  "args": null,
  "concreteType": "Category",
  "plural": false,
  "selections": (v5/*: any*/)
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "abstract",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pubDate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CategorySingleCategoryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoryById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CategorySingleCategoryRelay_data",
            "args": (v2/*: any*/)
          },
          {
            "kind": "FragmentSpread",
            "name": "CategorySingleHeadRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CategorySingleCategoryQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "categoryById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topNews",
            "storageKey": null,
            "args": null,
            "concreteType": "News",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "news",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "NewsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "NewsEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "News",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "news",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "NewsListPaginate_news",
            "filters": []
          },
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CategorySingleCategoryQuery",
    "id": "60b65cdb01bf73102e956357fb742307",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1ef7aa7b45f5462d3d80bb8af34ec94';
module.exports = node;
