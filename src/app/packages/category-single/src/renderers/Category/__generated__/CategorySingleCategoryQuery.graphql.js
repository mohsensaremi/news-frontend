/**
 * @flow
 * @relayHash beabcdbd02c8c3dff9b8f6eb24317780
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategorySingleCategoryRelay_data$ref = any;
export type CategorySingleCategoryQueryVariables = {|
  id: string,
  first: number,
|};
export type CategorySingleCategoryQueryResponse = {|
  +categoryById: ?{|
    +$fragmentRefs: CategorySingleCategoryRelay_data$ref
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
    id
  }
}

fragment CategorySingleCategoryRelay_data_3ASum4 on Category {
  title
  ...NewsListPaginateRelay_data_3ASum4
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
  link
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
  link
  pubDate
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
];
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "source",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NewsSource",
                        "plural": false,
                        "selections": (v5/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "category",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Category",
                        "plural": false,
                        "selections": (v5/*: any*/)
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "abstract",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "link",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "pubDate",
                        "args": null,
                        "storageKey": null
                      },
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
    "id": "0dd9e5e296420acc363ab989ebe749ab",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '332457134ae73ce643f96ddbeb8907e2';
module.exports = node;
