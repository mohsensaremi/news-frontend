/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsDesignDesign1Relay_data$ref = any;
type NewsDesignDesign2Relay_data$ref = any;
type NewsListPaginateRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategorySingleCategoryRelay_data$ref: FragmentReference;
declare export opaque type CategorySingleCategoryRelay_data$fragmentType: CategorySingleCategoryRelay_data$ref;
export type CategorySingleCategoryRelay_data = {|
  +title: string,
  +topNews: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: NewsDesignDesign1Relay_data$ref & NewsDesignDesign2Relay_data$ref,
  |}>,
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
      "kind": "LinkedField",
      "alias": null,
      "name": "topNews",
      "storageKey": null,
      "args": null,
      "concreteType": "News",
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
          "kind": "FragmentSpread",
          "name": "NewsDesignDesign1Relay_data",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "NewsDesignDesign2Relay_data",
          "args": null
        }
      ]
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
(node/*: any*/).hash = 'c4f2045b40a260c7f995f2b9b03ddc52';
module.exports = node;
