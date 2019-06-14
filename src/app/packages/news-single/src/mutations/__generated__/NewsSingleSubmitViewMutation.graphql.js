/**
 * @flow
 * @relayHash 699893ab87223b195837cf1c17e49b40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewsSingleSubmitViewMutationVariables = {|
  id: string
|};
export type NewsSingleSubmitViewMutationResponse = {|
  +submitNewsView: {|
    +result: {|
      +success: boolean
    |}
  |}
|};
export type NewsSingleSubmitViewMutation = {|
  variables: NewsSingleSubmitViewMutationVariables,
  response: NewsSingleSubmitViewMutationResponse,
|};
*/


/*
mutation NewsSingleSubmitViewMutation(
  $id: String!
) {
  submitNewsView(id: $id) {
    result {
      success
    }
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "submitNewsView",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "SubmitNewsViewPayload",
    "plural": false,
    "selections": [
      {
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsSingleSubmitViewMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsSingleSubmitViewMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "NewsSingleSubmitViewMutation",
    "id": "44c0fd051872b807c60ac3696c8cb981",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9cdd60d47b33795ff5a437772fc206fd';
module.exports = node;
