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
  +sourceUrl: string,
  +sourceName: string,
  +tagsTitle: $ReadOnlyArray<?string>,
  +categoriesTitle: $ReadOnlyArray<?string>,
  +pubDate: string,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sourceUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sourceName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "tagsTitle",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "categoriesTitle",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pubDate",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e0ac1144bb79db96dbaeb8bfe99e8f14';
module.exports = node;
