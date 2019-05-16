/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type NewsSingleRelatedNewsRelay_data$ref = any;
type NewsSingleSourceCardRelay_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsSingleNewsRelay_data$ref: FragmentReference;
declare export opaque type NewsSingleNewsRelay_data$fragmentType: NewsSingleNewsRelay_data$ref;
export type NewsSingleNewsRelay_data = {|
  +id: string,
  +title: string,
  +image: string,
  +content: string,
  +refUrl: string,
  +source: {|
    +title: string,
    +$fragmentRefs: NewsSingleSourceCardRelay_data$ref,
  |},
  +tagsTitle: $ReadOnlyArray<?string>,
  +categoriesTitle: $ReadOnlyArray<?string>,
  +pubDate: string,
  +category: {|
    +news: {|
      +$fragmentRefs: NewsSingleRelatedNewsRelay_data$ref
    |}
  |},
  +$refType: NewsSingleNewsRelay_data$ref,
|};
export type NewsSingleNewsRelay_data$data = NewsSingleNewsRelay_data;
export type NewsSingleNewsRelay_data$key = {
  +$data?: NewsSingleNewsRelay_data$data,
  +$fragmentRefs: NewsSingleNewsRelay_data$ref,
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
          "kind": "FragmentSpread",
          "name": "NewsSingleSourceCardRelay_data",
          "args": null
        }
      ]
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "category",
      "storageKey": null,
      "args": null,
      "concreteType": "Category",
      "plural": false,
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
              "kind": "FragmentSpread",
              "name": "NewsSingleRelatedNewsRelay_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '59da80ab225f8af255fd6cc4e9a3db79';
module.exports = node;
