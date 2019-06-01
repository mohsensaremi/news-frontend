/**
 * @flow
 * @relayHash 0b3b21817523e5d3a69a9c94bff75fee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsListPaginateMyNewsRelay_data$ref = any;
export type MyNewsMyNewsQueryVariables = {|
  first: number
|};
export type MyNewsMyNewsQueryResponse = {|
  +$fragmentRefs: NewsListPaginateMyNewsRelay_data$ref
|};
export type MyNewsMyNewsQuery = {|
  variables: MyNewsMyNewsQueryVariables,
  response: MyNewsMyNewsQueryResponse,
|};
*/


/*
query MyNewsMyNewsQuery(
  $first: Int!
) {
  ...NewsListPaginateMyNewsRelay_data_3ASum4
}

fragment NewsListPaginateMyNewsRelay_data_3ASum4 on Query {
  news: myNews(first: $first) {
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
  }
],
v1 = [
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
    "name": "MyNewsMyNewsQuery",
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
    "name": "MyNewsMyNewsQuery",
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
    "name": "MyNewsMyNewsQuery",
    "id": "86dc15b643c6c8f58cefc35b83810031",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec16221b8eb51d275be6a8403535b09f';
module.exports = node;
