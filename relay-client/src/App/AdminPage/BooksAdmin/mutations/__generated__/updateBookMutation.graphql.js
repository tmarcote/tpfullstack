/**
 * @flow
 * @relayHash 3b7947dd60b98f4185347a3e1e7b1d00
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateBookMutationVariables = {|
  book: {
    id: string;
    title?: ?string;
    author?: ?string;
    image?: ?string;
    categories?: ?$ReadOnlyArray<?string>;
    clientMutationId?: ?string;
  };
|};

export type updateBookMutationResponse = {|
  +updateBook: ?{|
    +book: ?{|
      +id: string;
      +title: ?string;
      +author: ?string;
      +image: ?string;
      +categories: ?$ReadOnlyArray<?{|
        +id: string;
        +label: ?string;
      |}>;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation updateBookMutation(
  $book: UpdateBookInput!
) {
  updateBook(input: $book) {
    book {
      id
      title
      author
      image
      categories {
        id
        label
      }
    }
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "book",
        "type": "UpdateBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateBookMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "book",
            "type": "UpdateBookInput!"
          }
        ],
        "concreteType": "UpdateBookPayload",
        "name": "updateBook",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "name": "book",
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Category",
                "name": "categories",
                "plural": true,
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
                    "name": "label",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "updateBookMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "book",
        "type": "UpdateBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateBookMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "book",
            "type": "UpdateBookInput!"
          }
        ],
        "concreteType": "UpdateBookPayload",
        "name": "updateBook",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Book",
            "name": "book",
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Category",
                "name": "categories",
                "plural": true,
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
                    "name": "label",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateBookMutation(\n  $book: UpdateBookInput!\n) {\n  updateBook(input: $book) {\n    book {\n      id\n      title\n      author\n      image\n      categories {\n        id\n        label\n      }\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
