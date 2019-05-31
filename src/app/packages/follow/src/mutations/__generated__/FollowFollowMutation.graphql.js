/**
 * @flow
 * @relayHash 6be2e1741217ebbe04df7aae30a09c63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowFollowMutationVariables = {|
  type: string,
  id: string,
|};
export type FollowFollowMutationResponse = {|
  +follow: ?{|
    +result: {|
      +success: boolean
    |},
    +followCount: {|
      +followsCount: number,
      +status: ?string,
    |},
  |}
|};
export type FollowFollowMutation = {|
  variables: FollowFollowMutationVariables,
  response: FollowFollowMutationResponse,
|};
*/


/*
mutation FollowFollowMutation(
  $type: String!
  $id: String!
) {
  follow(type: $type, id: $id) {
    result {
      success
    }
    followCount {
      followsCount
      status
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "type",
    "type": "String!",
    "defaultValue": null
  },
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
  },
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "result",
  "storageKey": null,
  "args": null,
  "concreteType": "DefaultMutationPayload",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "followsCount",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "FollowFollowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "follow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUnFollowPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followCount",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowCount",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FollowFollowMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "follow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUnFollowPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followCount",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowCount",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "FollowFollowMutation",
    "id": "b64e367e19b278dbc65cfaa132c8280a",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb155155454a966491775c11152a38be';
module.exports = node;
