/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategorySingleHeadRelay_data$ref: FragmentReference;
declare export opaque type CategorySingleHeadRelay_data$fragmentType: CategorySingleHeadRelay_data$ref;
export type CategorySingleHeadRelay_data = {|
  +title: string,
  +$refType: CategorySingleHeadRelay_data$ref,
|};
export type CategorySingleHeadRelay_data$data = CategorySingleHeadRelay_data;
export type CategorySingleHeadRelay_data$key = {
  +$data?: CategorySingleHeadRelay_data$data,
  +$fragmentRefs: CategorySingleHeadRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CategorySingleHeadRelay_data",
  "type": "Category",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = 'abcdb5887d8de19fb90db166519348a0';
module.exports = node;
