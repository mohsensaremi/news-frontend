/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleCategoryCardRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleCategoryCardRelay_data$fragmentType: NewsSingleCategoryCardRelay_data$ref;
export type NewsSingleCategoryCardRelay_data = {|
  +_id: string,
  +title: string,
  +$refType: NewsSingleCategoryCardRelay_data$ref,
|};
export type NewsSingleCategoryCardRelay_data$data = NewsSingleCategoryCardRelay_data;
export type NewsSingleCategoryCardRelay_data$key = {
  +$data?: NewsSingleCategoryCardRelay_data$data,
  +$fragmentRefs: NewsSingleCategoryCardRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsSingleCategoryCardRelay_data",
  "type": "Category",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0873897e93ab898dea7170b08b0027f4';
module.exports = node;
