/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsDesignDesign2Relay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleRelatedNewsRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleRelatedNewsRelay_data$fragmentType: NewsSingleRelatedNewsRelay_data$ref;
export type NewsSingleRelatedNewsRelay_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: NewsDesignDesign2Relay_data$ref,
    |}
  |}>,
  +$refType: NewsSingleRelatedNewsRelay_data$ref,
|};
export type NewsSingleRelatedNewsRelay_data$data = NewsSingleRelatedNewsRelay_data;
export type NewsSingleRelatedNewsRelay_data$key = {
  +$data?: NewsSingleRelatedNewsRelay_data$data,
  +$fragmentRefs: NewsSingleRelatedNewsRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsSingleRelatedNewsRelay_data",
  "type": "NewsConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "NewsEdge",
      "plural": true,
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
              "name": "NewsDesignDesign2Relay_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '19f6f3427320e9d8ab44c99bb8d700f9';
module.exports = node;
