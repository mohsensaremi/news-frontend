/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsDesignDesign1Relay_data$ref: FragmentReference;
declare export opaque type NewsDesignDesign1Relay_data$fragmentType: NewsDesignDesign1Relay_data$ref;
export type NewsDesignDesign1Relay_data = {|
  +title: string,
  +source: {|
    +title: string
  |},
  +category: {|
    +title: string
  |},
  +abstract: string,
  +link: string,
  +pubDate: string,
  +$refType: NewsDesignDesign1Relay_data$ref,
|};
export type NewsDesignDesign1Relay_data$data = NewsDesignDesign1Relay_data;
export type NewsDesignDesign1Relay_data$key = {
  +$data?: NewsDesignDesign1Relay_data$data,
  +$fragmentRefs: NewsDesignDesign1Relay_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "kind": "Fragment",
  "name": "NewsDesignDesign1Relay_data",
  "type": "News",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "source",
      "storageKey": null,
      "args": null,
      "concreteType": "NewsSource",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "category",
      "storageKey": null,
      "args": null,
      "concreteType": "Category",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "abstract",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "link",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pubDate",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8a040af6f64391d448c1ab9d4efb1fec';
module.exports = node;
