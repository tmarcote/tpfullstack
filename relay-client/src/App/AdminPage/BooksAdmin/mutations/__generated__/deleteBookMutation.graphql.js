/**
 * @flow
 * @relayHash 045b6c8ce32eec950f6436b5aeb46411
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type deleteBookMutationVariables = {|
  book: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type deleteBookMutationResponse = {|
  +deleteBook: ?{|
    +book: ?{|
      +id: string;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation deleteBookMutation(
  $book: DeleteBookInput!
) {
  deleteBook(input: $book) {
    book {
      id
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
        "type": "DeleteBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteBookMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "book",
            "type": "DeleteBookInput!"
          }
        ],
        "concreteType": "DeleteBookPayload",
        "name": "deleteBook",
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
  "name": "deleteBookMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "book",
        "type": "DeleteBookInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "deleteBookMutation",
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
            "type": "DeleteBookInput!"
          }
        ],
        "concreteType": "DeleteBookPayload",
        "name": "deleteBook",
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
  "text": "mutation deleteBookMutation(\n  $book: DeleteBookInput!\n) {\n  deleteBook(input: $book) {\n    book {\n      id\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
