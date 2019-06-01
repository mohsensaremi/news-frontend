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
};
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
      "selections": [
        (v0/*: any*/)
      ]
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
(node/*: any*/).hash = '46db0a71825b9a0811bce0b68dd8cdfa';
module.exports = node;
