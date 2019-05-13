/**
 * @flow
 * @relayHash 9a054768fb7c764161d3ea394bbc3ea2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeHomeRelay_data$ref = any;
export type HomeHomeQueryVariables = {||};
export type HomeHomeQueryResponse = {|
  +allCategories: $ReadOnlyArray<?{|
    +$fragmentRefs: HomeHomeRelay_data$ref
  |}>
|};
export type HomeHomeQuery = {|
  variables: HomeHomeQueryVariables,
  response: HomeHomeQueryResponse,
|};
*/


/*
query HomeHomeQuery {
  allCategories {
    ...HomeHomeRelay_data
    id
  }
}

fragment HomeHomeRelay_data on Category {
  id
  ...HomeCategoryRelay_data
}

fragment HomeCategoryRelay_data on Category {
  title
  news(first: 10) {
    edges {
      node {
        id
        ...NewsDesignDesign1Relay_data
      }
    }
  }
}

fragment NewsDesignDesign1Relay_data on News {
  title
  sourceName
  abstract
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCategories",
        "storageKey": null,
        "args": null,
        "concreteType": "Category",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HomeHomeRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeHomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCategories",
        "storageKey": null,
        "args": null,
        "concreteType": "Category",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "news",
            "storageKey": "news(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
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
                      (v0/*: any*/),
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "sourceName",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "abstract",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeHomeQuery",
    "id": "9ca2b1586c0764c88a4c23a4eb84bc7d",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4d366588deed4603d88662ba6097eda';
module.exports = node;
