/**
 * @flow
 * @relayHash b7be983916c379f28ef0868bc0e5a726
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsListPaginateRelay_data$ref = any;
export type NewsListPaginateRelayForwardQueryVariables = {|
  categoryId: string,
  first: number,
  after?: ?string,
|};
export type NewsListPaginateRelayForwardQueryResponse = {|
  +categoryById: ?{|
    +$fragmentRefs: NewsListPaginateRelay_data$ref
  |}
|};
export type NewsListPaginateRelayForwardQuery = {|
  variables: NewsListPaginateRelayForwardQueryVariables,
  response: NewsListPaginateRelayForwardQueryResponse,
|};
*/


/*
query NewsListPaginateRelayForwardQuery(
  $categoryId: String!
  $first: Int!
  $after: String
) {
  categoryById(id: $categoryId) {
    ...NewsListPaginateRelay_data_2HEEH6
    id
  }
}

fragment NewsListPaginateRelay_data_2HEEH6 on Category {
  news(first: $first, after: $after) {
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
    ...NewsDesignDesign1Relay_data
    ...NewsDesignDesign2Relay_data
    id
  }
}

fragment NewsDesignDesign1Relay_data on News {
  title
  source {
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
  abstract
  link
  pubDate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "categoryId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "categoryId"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsListPaginateRelayForwardQuery",
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
            "name": "NewsListPaginateRelay_data",
            "args": (v2/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsListPaginateRelayForwardQuery",
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
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "source",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "NewsSource",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v4/*: any*/)
                        ]
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
                      (v4/*: any*/),
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
    "name": "NewsListPaginateRelayForwardQuery",
    "id": "88127332ccb70904527551e7d38134bb",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c92925e4a38a69739a6f06b99b976f84';
module.exports = node;
