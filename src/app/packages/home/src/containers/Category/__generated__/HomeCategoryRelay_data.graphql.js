/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsDesignDesign1Relay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeCategoryRelay_data$ref: FragmentReference;
declare export opaque type HomeCategoryRelay_data$fragmentType: HomeCategoryRelay_data$ref;
export type HomeCategoryRelay_data = {|
  +title: string,
  +news: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: NewsDesignDesign1Relay_data$ref,
      |}
    |}>
  |},
  +$refType: HomeCategoryRelay_data$ref,
|};
export type HomeCategoryRelay_data$data = HomeCategoryRelay_data;
export type HomeCategoryRelay_data$key = {
  +$data?: HomeCategoryRelay_data$data,
  +$fragmentRefs: HomeCategoryRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeCategoryRelay_data",
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
                  "name": "NewsDesignDesign1Relay_data",
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
(node/*: any*/).hash = '6890ded8830b7f15309fdb9f62f4d1ed';
module.exports = node;
