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
  +sourceName: string,
  +abstract: string,
  +$refType: NewsDesignDesign1Relay_data$ref,
|};
export type NewsDesignDesign1Relay_data$data = NewsDesignDesign1Relay_data;
export type NewsDesignDesign1Relay_data$key = {
  +$data?: NewsDesignDesign1Relay_data$data,
  +$fragmentRefs: NewsDesignDesign1Relay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "NewsDesignDesign1Relay_data",
  "type": "News",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "sourceName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "abstract",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '779264341fdf019d5f836f2d5f5b5a44';
module.exports = node;
