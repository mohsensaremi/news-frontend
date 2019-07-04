/**
 * @flow
 * @relayHash 8f76e0a890a7751ae8c23a5536ff2fc0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToolbarToolbarItemsQueryVariables = {||};
export type ToolbarToolbarItemsQueryResponse = {|
  +allCategories: $ReadOnlyArray<?{|
    +_id: string,
    +id: string,
    +title: string,
  |}>
|};
export type ToolbarToolbarItemsQuery = {|
  variables: ToolbarToolbarItemsQueryVariables,
  response: ToolbarToolbarItemsQueryResponse,
|};
*/


/*
query ToolbarToolbarItemsQuery {
  allCategories {
    _id
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToolbarToolbarItemsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ToolbarToolbarItemsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ToolbarToolbarItemsQuery",
    "id": "9b4a80b2d46c6885d78e883b57eeaba2",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cceed00364d91e5e0470b1919a892af5';
module.exports = node;
