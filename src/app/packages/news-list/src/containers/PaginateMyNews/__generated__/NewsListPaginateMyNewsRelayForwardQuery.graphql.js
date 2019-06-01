/**
 * @flow
 * @relayHash 68b3667afe19191fafb99c534d93ca9f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsListPaginateMyNewsRelay_data$ref = any;
export type NewsListPaginateMyNewsRelayForwardQueryVariables = {|
  first: number,
  after?: ?string,
|};
export type NewsListPaginateMyNewsRelayForwardQueryResponse = {|
  +$fragmentRefs: NewsListPaginateMyNewsRelay_data$ref
|};
export type NewsListPaginateMyNewsRelayForwardQuery = {|
  variables: NewsListPaginateMyNewsRelayForwardQueryVariables,
  response: NewsListPaginateMyNewsRelayForwardQueryResponse,
|};
*/


/*
query NewsListPaginateMyNewsRelayForwardQuery(
  $first: Int!
  $after: String
) {
  ...NewsListPaginateMyNewsRelay_data_2HEEH6
}

fragment NewsListPaginateMyNewsRelay_data_2HEEH6 on Query {
  news: myNews(first: $first, after: $after) {
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
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsListPaginateMyNewsRelayForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NewsListPaginateMyNewsRelay_data",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsListPaginateMyNewsRelayForwardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "news",
        "name": "myNews",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "source",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NewsSource",
                    "plural": false,
                    "selections": (v4/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "category",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Category",
                    "plural": false,
                    "selections": (v4/*: any*/)
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
        "alias": "news",
        "name": "myNews",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "NewsListPaginateMyNews_news",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsListPaginateMyNewsRelayForwardQuery",
    "id": "d99d136cd5208d1e82264845c64f9588",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f5e25ee37c092bc90b97a5a8422db1b';
module.exports = node;
