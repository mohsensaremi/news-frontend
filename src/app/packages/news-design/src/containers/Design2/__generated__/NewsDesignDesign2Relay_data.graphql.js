/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewsDesignDesign2Relay_data$ref: FragmentReference;
declare export opaque type NewsDesignDesign2Relay_data$fragmentType: NewsDesignDesign2Relay_data$ref;
export type NewsDesignDesign2Relay_data = {|
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
  +$refType: NewsDesignDesign2Relay_data$ref,
|};
export type NewsDesignDesign2Relay_data$data = NewsDesignDesign2Relay_data;
export type NewsDesignDesign2Relay_data$key = {
  +$data?: NewsDesignDesign2Relay_data$data,
  +$fragmentRefs: NewsDesignDesign2Relay_data$ref,
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
  "name": "NewsDesignDesign2Relay_data",
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
(node/*: any*/).hash = 'd36e4bb50fae0fab926e30b570735dea';
module.exports = node;
