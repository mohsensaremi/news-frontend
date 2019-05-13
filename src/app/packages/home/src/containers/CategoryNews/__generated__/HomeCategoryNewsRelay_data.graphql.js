/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsDesignDesign1Relay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeCategoryNewsRelay_data$ref: FragmentReference;
declare export opaque type HomeCategoryNewsRelay_data$fragmentType: HomeCategoryNewsRelay_data$ref;
export type HomeCategoryNewsRelay_data = {|
  +news: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: NewsDesignDesign1Relay_data$ref,
      |}
    |}>
  |},
  +$refType: HomeCategoryNewsRelay_data$ref,
|};
export type HomeCategoryNewsRelay_data$data = HomeCategoryNewsRelay_data;
export type HomeCategoryNewsRelay_data$key = {
  +$data?: HomeCategoryNewsRelay_data$data,
  +$fragmentRefs: HomeCategoryNewsRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HomeCategoryNewsRelay_data",
  "type": "Category",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = '9a83b0ed48fe065684badb5495c2cd4e';
module.exports = node;
