/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeCategoryRelay_data$ref: FragmentReference;
declare export opaque type HomeCategoryRelay_data$fragmentType: HomeCategoryRelay_data$ref;
export type HomeCategoryRelay_data = {|
  +id: string,
  +title: string,
  +$refType: HomeCategoryRelay_data$ref,
|};
export type HomeCategoryRelay_data$data = HomeCategoryRelay_data;
export type HomeCategoryRelay_data$key = {
  +$data?: HomeCategoryRelay_data$data,
  +$fragmentRefs: HomeCategoryRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeCategoryRelay_data",
  "type": "Category",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '2b2047539ab8d70d45abd3e60d008d6f';
module.exports = node;
