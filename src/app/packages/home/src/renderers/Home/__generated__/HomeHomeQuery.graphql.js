/**
 * @flow
 * @relayHash 9ea96f045a432f765920f5ce20b18295
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeHomeRelay_data$ref = any;
export type HomeHomeQueryVariables = {||};
export type HomeHomeQueryResponse = {|
  +allCategories: $ReadOnlyArray<?{|
    +$fragmentRefs: HomeHomeRelay_data$ref
  |}>
|};
export type HomeHomeQuery = {|
  variables: HomeHomeQueryVariables,
  response: HomeHomeQueryResponse,
|};
*/


/*
query HomeHomeQuery {
  allCategories {
    ...HomeHomeRelay_data
    id
  }
}

fragment HomeHomeRelay_data on Category {
  id
  ...HomeCategoryRelay_data
}

fragment HomeCategoryRelay_data on Category {
  id
  title
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "HomeHomeRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeHomeQuery",
    "argumentDefinitions": [],
    "selections": [
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeHomeQuery",
    "id": "d89474bc3406c14f4c24d3ce1f9cfcc4",
    "text": null,
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c4d366588deed4603d88662ba6097eda';
module.exports = node;
