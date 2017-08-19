/**
 * @flow
 * @relayHash aeb31a6e65f49e77a59bebb8634d1f40
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type BooksListQueryResponse = {| |};
*/


/*
query BooksListQuery(
  $categoryId: String
  $count: Int!
  $cursor: String
) {
  ...BooksListContainer_result
}

fragment BooksListContainer_result on Query {
  books(first: $count, categoryId: $categoryId, after: $cursor) {
    edges {
      node {
        ...BooksListItem_book
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}

fragment BooksListItem_book on Book {
  id
  title
  author
  image
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "categoryId",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BooksListQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "BooksListContainer_result",
        "args": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "BooksListQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "categoryId",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "cursor",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "BooksListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "categoryId",
            "variableName": "categoryId",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "concreteType": "BookConnection",
        "name": "books",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BookEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Book",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "author",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "image",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "startCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "categoryId",
            "variableName": "categoryId",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "handle": "connection",
        "name": "books",
        "key": "BooksList_books",
        "filters": [
          "categoryId"
        ]
      }
    ]
  },
  "text": "query BooksListQuery(\n  $categoryId: String\n  $count: Int!\n  $cursor: String\n) {\n  ...BooksListContainer_result\n}\n\nfragment BooksListContainer_result on Query {\n  books(first: $count, categoryId: $categoryId, after: $cursor) {\n    edges {\n      node {\n        ...BooksListItem_book\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment BooksListItem_book on Book {\n  id\n  title\n  author\n  image\n}\n"
};

module.exports = batch;
