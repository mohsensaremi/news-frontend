/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeCategoryRelay$ref: FragmentReference;
declare export opaque type HomeCategoryRelay$fragmentType: HomeCategoryRelay$ref;
export type HomeCategoryRelay = {|
  +title: string,
  +$refType: HomeCategoryRelay$ref,
|};
export type HomeCategoryRelay$data = HomeCategoryRelay;
export type HomeCategoryRelay$key = {
  +$data?: HomeCategoryRelay$data,
  +$fragmentRefs: HomeCategoryRelay$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeCategoryRelay",
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
(node/*: any*/).hash = '4e0ee0e89e2467d207f7a68644d1b304';
module.exports = node;
