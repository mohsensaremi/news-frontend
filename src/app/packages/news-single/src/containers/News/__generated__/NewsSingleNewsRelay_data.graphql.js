/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleNewsRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleNewsRelay_data$fragmentType: NewsSingleNewsRelay_data$ref;
export type NewsSingleNewsRelay_data = {|
  +id: string,
  +title: string,
  +image: string,
  +content: string,
  +$refType: NewsSingleNewsRelay_data$ref,
|};
export type NewsSingleNewsRelay_data$data = NewsSingleNewsRelay_data;
export type NewsSingleNewsRelay_data$key = {
  +$data?: NewsSingleNewsRelay_data$data,
  +$fragmentRefs: NewsSingleNewsRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsSingleNewsRelay_data",
  "type": "News",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fd23a169b9f1a5e0ff249cc4fc59acb8';
module.exports = node;
