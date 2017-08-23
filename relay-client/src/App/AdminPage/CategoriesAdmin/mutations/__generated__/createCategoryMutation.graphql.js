/**
 * @flow
 * @relayHash d486c60267acdd3fc88cfa6ed932f434
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createCategoryMutationVariables = {|
  category: {
    label?: ?string;
  };
|};

export type createCategoryMutationResponse = {|
  +createCategory: ?{|
    +category: ?{|
      +id: string;
      +label: ?string;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation createCategoryMutation(
  $category: CreateCategoryInput!
) {
  createCategory(input: $category) {
    category {
      id
      label
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
        "name": "category",
        "type": "CreateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "category",
            "type": "CreateCategoryInput!"
          }
        ],
        "concreteType": "CreateCategoryPayload",
        "name": "createCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "name": "category",
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
                "name": "label",
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
  "name": "createCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "category",
        "type": "CreateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createCategoryMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "category",
            "type": "CreateCategoryInput!"
          }
        ],
        "concreteType": "CreateCategoryPayload",
        "name": "createCategory",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "name": "category",
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
                "name": "label",
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
  "text": "mutation createCategoryMutation(\n  $category: CreateCategoryInput!\n) {\n  createCategory(input: $category) {\n    category {\n      id\n      label\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
