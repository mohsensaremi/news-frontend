/**
 * @flow
 * @relayHash d8f19698d802e1403b46e6d8787a5b80
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsSingleNewsRelay_data$ref = any;
export type NewsSingleNewsQueryVariables = {|
  id: string
|};
export type NewsSingleNewsQueryResponse = {|
  +newsById: ?{|
    +$fragmentRefs: NewsSingleNewsRelay_data$ref
  |}
|};
export type NewsSingleNewsQuery = {|
  variables: NewsSingleNewsQueryVariables,
  response: NewsSingleNewsQueryResponse,
|};
*/


/*
query NewsSingleNewsQuery(
  $id: String!
) {
  newsById(id: $id) {
    ...NewsSingleNewsRelay_data
    id
  }
}

fragment NewsSingleNewsRelay_data on News {
  _id
  id
  title
  image
  content
  refUrl
  abstract
  source {
    title
    id
  }
  tagsTitle
  categoriesTitle
  pubDate
  category {
    _id
    ...NewsSingleRelatedNewsRelay_data
    ...NewsSingleCategoryCardRelay_data
    id
  }
}

fragment NewsSingleRelatedNewsRelay_data on Category {
  news(first: 10) {
    edges {
      node {
        id
        ...NewsDesignDesign2Relay_data
      }
    }
  }
}

fragment NewsSingleCategoryCardRelay_data on Category {
  _id
  title
}

fragment NewsDesignDesign2Relay_data on News {
  title
  source {
    title
    id
  }
  category {
    title
    id
  }
  abstract
  _id
  pubDate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "abstract",
  "args": null,
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v3/*: any*/)
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "source",
  "storageKey": null,
  "args": null,
  "concreteType": "NewsSource",
  "plural": false,
  "selections": (v6/*: any*/)
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pubDate",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NewsSingleNewsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newsById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "News",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "NewsSingleNewsRelay_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewsSingleNewsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newsById",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "News",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
          (v5/*: any*/),
          (v7/*: any*/),
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
          (v8/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v7/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "category",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Category",
                            "plural": false,
                            "selections": (v6/*: any*/)
                          },
                          (v5/*: any*/),
                          (v2/*: any*/),
                          (v8/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v4/*: any*/),
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsSingleNewsQuery",
    "id": "f23bf714fb61a2a993df246ce02d9dac",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df60c1f0738aeb17b8484b66fcf78d91';
module.exports = node;
