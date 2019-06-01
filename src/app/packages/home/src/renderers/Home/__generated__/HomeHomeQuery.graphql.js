/**
 * @flow
 * @relayHash 715260bdf4384a3ae9d766a09daa88ed
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
  _id
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
            "name": "_id",
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
    "id": "42048cc8a412e49d4273ae5e5f567401",
    "text": null,
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c4d366588deed4603d88662ba6097eda';
module.exports = node;
