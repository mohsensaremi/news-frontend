/**
 * @flow
 * @relayHash e305b096fb1929689011646340e3e738
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FollowUnfollowMutationVariables = {|
  type: string,
  id: string,
|};
export type FollowUnfollowMutationResponse = {|
  +unfollow: ?{|
    +result: {|
      +success: boolean
    |},
    +followCount: {|
      +followsCount: number,
      +status: ?string,
    |},
  |}
|};
export type FollowUnfollowMutation = {|
  variables: FollowUnfollowMutationVariables,
  response: FollowUnfollowMutationResponse,
|};
*/


/*
mutation FollowUnfollowMutation(
  $type: String!
  $id: String!
) {
  unfollow(type: $type, id: $id) {
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
    "name": "FollowUnfollowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollow",
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
    "name": "FollowUnfollowMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollow",
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
    "name": "FollowUnfollowMutation",
    "id": "c66f352e66bfb403cace1206e95fa94e",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fbe5face351c1b07b7aea7b30845e17d';
module.exports = node;
