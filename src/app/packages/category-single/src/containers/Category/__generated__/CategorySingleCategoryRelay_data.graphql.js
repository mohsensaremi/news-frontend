/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsListPaginateRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategorySingleCategoryRelay_data$ref: FragmentReference;
declare export opaque type CategorySingleCategoryRelay_data$fragmentType: CategorySingleCategoryRelay_data$ref;
export type CategorySingleCategoryRelay_data = {|
  +title: string,
  +$fragmentRefs: NewsListPaginateRelay_data$ref,
  +$refType: CategorySingleCategoryRelay_data$ref,
|};
export type CategorySingleCategoryRelay_data$data = CategorySingleCategoryRelay_data;
export type CategorySingleCategoryRelay_data$key = {
  +$data?: CategorySingleCategoryRelay_data$data,
  +$fragmentRefs: CategorySingleCategoryRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CategorySingleCategoryRelay_data",
  "type": "Category",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 20
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "NewsListPaginateRelay_data",
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '291820e55c1fe28fc7ceec3a49721eaa';
module.exports = node;
