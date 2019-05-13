/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HomeCategoryRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeHomeRelay_data$ref: FragmentReference;
declare export opaque type HomeHomeRelay_data$fragmentType: HomeHomeRelay_data$ref;
export type HomeHomeRelay_data = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: HomeCategoryRelay_data$ref,
  +$refType: HomeHomeRelay_data$ref,
|}>;
export type HomeHomeRelay_data$data = HomeHomeRelay_data;
export type HomeHomeRelay_data$key = {
  +$data?: HomeHomeRelay_data$data,
  +$fragmentRefs: HomeHomeRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeHomeRelay_data",
  "type": "Category",
  "metadata": {
    "plural": true
  },
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
      "kind": "FragmentSpread",
      "name": "HomeCategoryRelay_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8f994d3ccbb474a3ec8996f59f49aec1';
module.exports = node;
