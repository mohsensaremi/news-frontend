/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsDesignDesign1Relay_data$ref = any;
type NewsDesignDesign2Relay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsListListRelay_data$ref: FragmentReference;
declare export opaque type NewsListListRelay_data$fragmentType: NewsListListRelay_data$ref;
export type NewsListListRelay_data = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +$fragmentRefs: NewsDesignDesign1Relay_data$ref & NewsDesignDesign2Relay_data$ref,
  |},
  +$refType: NewsListListRelay_data$ref,
|}>;
export type NewsListListRelay_data$data = NewsListListRelay_data;
export type NewsListListRelay_data$key = {
  +$data?: NewsListListRelay_data$data,
  +$fragmentRefs: NewsListListRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsListListRelay_data",
  "type": "NewsEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "News",
      "plural": false,
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
          "name": "NewsDesignDesign1Relay_data",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "NewsDesignDesign2Relay_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0544296e878f994399707f6632052f3a';
module.exports = node;
