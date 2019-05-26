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
  +title: string,
  +news: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: NewsDesignDesign2Relay_data$ref,
      |}
    |}>
  |},
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "news",
      "storageKey": "news(first:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "NewsConnection",
      "plural": false,
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c69812dccc19e30c95f51f4515acc1e9';
module.exports = node;
