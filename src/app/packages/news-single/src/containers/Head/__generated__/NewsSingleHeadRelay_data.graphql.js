/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleHeadRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleHeadRelay_data$fragmentType: NewsSingleHeadRelay_data$ref;
export type NewsSingleHeadRelay_data = {|
  +title: string,
  +image: string,
  +content: string,
  +refUrl: string,
  +pubDateISO: string,
  +abstract: string,
  +source: {|
    +title: string,
    +url: string,
    +logo: string,
  |},
  +metaKeywords: string,
  +metaDescription: string,
  +$refType: NewsSingleHeadRelay_data$ref,
|};
export type NewsSingleHeadRelay_data$data = NewsSingleHeadRelay_data;
export type NewsSingleHeadRelay_data$key = {
  +$data?: NewsSingleHeadRelay_data$data,
  +$fragmentRefs: NewsSingleHeadRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "NewsSingleHeadRelay_data",
  "type": "News",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
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
      "name": "refUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pubDateISO",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "abstract",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "source",
      "storageKey": null,
      "args": null,
      "concreteType": "NewsSource",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "url",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logo",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "metaKeywords",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "metaDescription",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4c3082905fcbfe1685b811034208717';
module.exports = node;
