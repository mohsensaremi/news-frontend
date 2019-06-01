/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsListListRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsListPaginateRelay_data$ref: FragmentReference;
declare export opaque type NewsListPaginateRelay_data$fragmentType: NewsListPaginateRelay_data$ref;
export type NewsListPaginateRelay_data = {|
  +news: {|
    +edges: ?$ReadOnlyArray<?{|
      +$fragmentRefs: NewsListListRelay_data$ref
    |}>
  |},
  +$refType: NewsListPaginateRelay_data$ref,
|};
export type NewsListPaginateRelay_data$data = NewsListPaginateRelay_data;
export type NewsListPaginateRelay_data$key = {
  +$data?: NewsListPaginateRelay_data$data,
  +$fragmentRefs: NewsListPaginateRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsListPaginateRelay_data",
  "type": "Category",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "news"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 20
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "news",
      "name": "__NewsListPaginate_news_connection",
      "storageKey": null,
      "args": null,
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
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
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
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "NewsListListRelay_data",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '142c35dff5bae054dfb9a5f6e8fe10b9';
module.exports = node;
