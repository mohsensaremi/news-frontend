/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleSourceCardRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleSourceCardRelay_data$fragmentType: NewsSingleSourceCardRelay_data$ref;
export type NewsSingleSourceCardRelay_data = {|
  +title: string,
  +$refType: NewsSingleSourceCardRelay_data$ref,
|};
export type NewsSingleSourceCardRelay_data$data = NewsSingleSourceCardRelay_data;
export type NewsSingleSourceCardRelay_data$key = {
  +$data?: NewsSingleSourceCardRelay_data$data,
  +$fragmentRefs: NewsSingleSourceCardRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsSingleSourceCardRelay_data",
  "type": "NewsSource",
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
(node/*: any*/).hash = 'd9ce2fceeba5778553507f5717f14d9e';
module.exports = node;
