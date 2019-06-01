/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsListListRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsListPaginateMyNewsRelay_data$ref: FragmentReference;
declare export opaque type NewsListPaginateMyNewsRelay_data$fragmentType: NewsListPaginateMyNewsRelay_data$ref;
export type NewsListPaginateMyNewsRelay_data = {|
  +news: {|
    +edges: ?$ReadOnlyArray<?{|
      +$fragmentRefs: NewsListListRelay_data$ref
    |}>
  |},
  +$refType: NewsListPaginateMyNewsRelay_data$ref,
|};
export type NewsListPaginateMyNewsRelay_data$data = NewsListPaginateMyNewsRelay_data;
export type NewsListPaginateMyNewsRelay_data$key = {
  +$data?: NewsListPaginateMyNewsRelay_data$data,
  +$fragmentRefs: NewsListPaginateMyNewsRelay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsListPaginateMyNewsRelay_data",
  "type": "Query",
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
      "name": "__NewsListPaginateMyNews_news_connection",
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
(node/*: any*/).hash = 'ff241efb6aa97e9c8313b584bfd16481';
module.exports = node;
