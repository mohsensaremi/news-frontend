/**
 * @flow
 * @relayHash e6f35d71c7f4c463397d3636c51b9213
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewsSingleHeadRelay_data$ref = any;
type NewsSingleNewsRelay_data$ref = any;
export type NewsSingleNewsQueryVariables = {|
  id: string
|};
export type NewsSingleNewsQueryResponse = {|
  +newsById: ?{|
    +$fragmentRefs: NewsSingleNewsRelay_data$ref & NewsSingleHeadRelay_data$ref
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
    ...NewsSingleHeadRelay_data
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

fragment NewsSingleHeadRelay_data on News {
  title
  image
  content
  refUrl
  pubDateISO
  abstract
  newsSource: source {
    title
    url
    logo
    id
  }
  metaKeywords
  metaDescription
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
          },
          {
            "kind": "FragmentSpread",
            "name": "NewsSingleHeadRelay_data",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pubDateISO",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "newsSource",
            "name": "source",
            "storageKey": null,
            "args": null,
            "concreteType": "NewsSource",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "logo",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "metaKeywords",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "metaDescription",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsSingleNewsQuery",
    "id": "d6ba1ddfa712d84090d1cc64eea39095",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '04983e5fc0978f7343361d1a2ed3a16e';
module.exports = node;
