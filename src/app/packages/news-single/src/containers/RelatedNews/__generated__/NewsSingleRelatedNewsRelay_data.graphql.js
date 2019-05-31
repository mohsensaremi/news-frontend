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
(node/*: any*/).hash = '2503dc8223cea989c336dce75be68187';
module.exports = node;
