/**
 * @flow
 * @relayHash 2c88d3d7dec4ce6d28f486f7de4bd601
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
    _id
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
    "id": "c8a918ccfcc0e7b0daae68dc401e407f",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8b1dbbace0734d9e409bbd74377ad09';
module.exports = node;
