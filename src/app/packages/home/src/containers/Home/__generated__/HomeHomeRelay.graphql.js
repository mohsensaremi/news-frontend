/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HomeCategoryRelay$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeHomeRelay$ref: FragmentReference;
declare export opaque type HomeHomeRelay$fragmentType: HomeHomeRelay$ref;
export type HomeHomeRelay = $ReadOnlyArray<{|
  +$fragmentRefs: HomeCategoryRelay$ref,
  +$refType: HomeHomeRelay$ref,
|}>;
export type HomeHomeRelay$data = HomeHomeRelay;
export type HomeHomeRelay$key = {
  +$data?: HomeHomeRelay$data,
  +$fragmentRefs: HomeHomeRelay$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeHomeRelay",
  "type": "Category",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HomeCategoryRelay",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1ba704818ec420938488dbe779e8c0ed';
module.exports = node;
