/**
 * @flow
 * @relayHash 6fad7043e72657488bc31c607e30f49f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthLoginRegisterMutationVariables = {|
  email: string,
  password: string,
|};
export type AuthLoginRegisterMutationResponse = {|
  +loginRegisterUser: {|
    +result: {|
      +success: boolean
    |},
    +token: string,
    +user: ?{|
      +email: string
    |},
  |}
|};
export type AuthLoginRegisterMutation = {|
  variables: AuthLoginRegisterMutationVariables,
  response: AuthLoginRegisterMutationResponse,
|};
*/


/*
mutation AuthLoginRegisterMutation(
  $email: String!
  $password: String!
) {
  loginRegisterUser(email: $email, password: $password) {
    result {
      success
    }
    token
    user {
      email
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
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
  "name": "token",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AuthLoginRegisterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loginRegisterUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginRegisterPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthLoginRegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "loginRegisterUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginRegisterPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
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
    "name": "AuthLoginRegisterMutation",
    "id": "c0f8faeb44afecf5b05f01e2d1c080ea",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f28d7a705568b1c2d6fd4a21cff3893c';
module.exports = node;
