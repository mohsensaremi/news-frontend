/**
 * @flow
 * @relayHash 0e08e69a004ee5f20af490a39332a650
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToolbarToolbarItemsQueryVariables = {||};
export type ToolbarToolbarItemsQueryResponse = {|
  +allCategories: $ReadOnlyArray<?{|
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
    "id": "2989ff7819a84353f167a46a5c85655e",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df8c433cc11217a9afd3edfc391102c8';
module.exports = node;
