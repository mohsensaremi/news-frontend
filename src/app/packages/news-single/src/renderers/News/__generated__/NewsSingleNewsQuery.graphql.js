/**
 * @flow
 * @relayHash 06f795371889fda4a22283c29e83681c
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
  id
  title
  image
  content
  refUrl
  abstract
  source {
    title
    ...NewsSingleSourceCardRelay_data
    id
  }
  tagsTitle
  categoriesTitle
  pubDate
  category {
    news(first: 10) {
      ...NewsSingleRelatedNewsRelay_data
    }
    id
  }
}

fragment NewsSingleSourceCardRelay_data on NewsSource {
  title
}

fragment NewsSingleRelatedNewsRelay_data on NewsConnection {
  edges {
    node {
      id
      ...NewsDesignDesign2Relay_data
    }
  }
}

fragment NewsDesignDesign2Relay_data on News {
  title
  source {
    title
    id
  }
  link
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "source",
  "storageKey": null,
  "args": null,
  "concreteType": "NewsSource",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/)
  ]
},
v5 = {
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
            "kind": "ScalarField",
            "alias": null,
            "name": "abstract",
            "args": null,
            "storageKey": null
          },
          (v4/*: any*/),
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
          (v5/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "link",
                            "args": null,
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NewsSingleNewsQuery",
    "id": "a495c6489e571044f615e1c42be4579b",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df60c1f0738aeb17b8484b66fcf78d91';
module.exports = node;
