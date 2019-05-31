/**
 * @flow
 * @relayHash c8c78066512ca484b62f457a32c19906
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowFollowCountProviderQueryVariables = {|
  id: string,
  type: string,
|};
export type FollowFollowCountProviderQueryResponse = {|
  +followCount: ?{|
    +followsCount: number,
    +status: ?string,
  |}
|};
export type FollowFollowCountProviderQuery = {|
  variables: FollowFollowCountProviderQueryVariables,
  response: FollowFollowCountProviderQueryResponse,
|};
*/


/*
query FollowFollowCountProviderQuery(
  $id: String!
  $type: String!
) {
  followCount(id: $id, type: $type) {
    followsCount
    status
    id
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
    "name": "type",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "followsCount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FollowFollowCountProviderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followCount",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowCount",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowFollowCountProviderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followCount",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowCount",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FollowFollowCountProviderQuery",
    "id": "bb2b1316c696c24708f3b272a78a82a7",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfccfece97b928c7e0924f9a009f3cce';
module.exports = node;
