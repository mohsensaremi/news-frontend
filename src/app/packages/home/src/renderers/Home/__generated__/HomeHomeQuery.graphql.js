/**
 * @flow
 * @relayHash 4c9be61e5ff603a177d836f89e690559
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
    "id": "e29e7beb442619a45b2e022770555e30",
    "text": null,
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c4d366588deed4603d88662ba6097eda';
module.exports = node;
