/**
 * @flow
 * @relayHash faf91617fb3f570604389153c148da3c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToolbarToolbarItemsQueryVariables = {||};
export type ToolbarToolbarItemsQueryResponse = {|
  +allCategories: $ReadOnlyArray<?{|
    +id: string,
    +link: string,
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
    link
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
        "name": "link",
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
    "id": "dfd0f2290c5d58734ca6f7932d54e40d",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2f0ac277badf204372448442dcf13f4';
module.exports = node;
