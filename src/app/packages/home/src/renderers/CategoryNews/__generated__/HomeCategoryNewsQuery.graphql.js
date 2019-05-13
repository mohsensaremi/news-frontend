/**
 * @flow
 * @relayHash 9d01f8b6638e3a00055b8aeba89957bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeCategoryNewsRelay_data$ref = any;
export type HomeCategoryNewsQueryVariables = {|
  id: string
|};
export type HomeCategoryNewsQueryResponse = {|
  +categoryById: ?{|
    +$fragmentRefs: HomeCategoryNewsRelay_data$ref
  |}
|};
export type HomeCategoryNewsQuery = {|
  variables: HomeCategoryNewsQueryVariables,
  response: HomeCategoryNewsQueryResponse,
|};
*/


/*
query HomeCategoryNewsQuery(
  $id: String!
) {
  categoryById(id: $id) {
    ...HomeCategoryNewsRelay_data
    id
  }
}

fragment HomeCategoryNewsRelay_data on Category {
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
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
v2 = {
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
    "name": "HomeCategoryNewsQuery",
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
            "name": "HomeCategoryNewsRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeCategoryNewsQuery",
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
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
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
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeCategoryNewsQuery",
    "id": "fe8bbe4d38b8e3231056fff558087c74",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f592834114df6b1da6a984e5335b2ffb';
module.exports = node;
