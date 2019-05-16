/**
 * @flow
 * @relayHash 4ea56cd312d3b7e0c868fbeb80ec410a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsSingleNewsRelay_data$ref = any;
export type NewsSingleNewsQueryVariables = {|
  id: string
|};
export type NewsSingleNewsQueryResponse = {|
  +newsById: ?{|
    +$fragmentRefs: NewsSingleNewsRelay_data$ref
  |}
|};
export type NewsSingleNewsQuery = {|
  variables: NewsSingleNewsQueryVariables,
  response: NewsSingleNewsQueryResponse,
|};
*/


/*
query NewsSingleNewsQuery(
  $id: String!
) {
  newsById(id: $id) {
    ...NewsSingleNewsRelay_data
    id
  }
}

fragment NewsSingleNewsRelay_data on News {
  id
  title
  image
  content
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsSingleNewsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newsById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "News",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "NewsSingleNewsRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsSingleNewsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newsById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "News",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "image",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsSingleNewsQuery",
    "id": "bf5b6f49281d2bfa9f89216dfbccd791",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df60c1f0738aeb17b8484b66fcf78d91';
module.exports = node;
