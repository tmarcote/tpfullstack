/**
 * @flow
 * @relayHash e1c27f46ac9dc05183d61740b81c5a1c
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateCategoryMutationVariables = {|
  category: {
    id: string;
    label?: ?string;
    clientMutationId?: ?string;
  };
|};

export type updateCategoryMutationResponse = {|
  +updateCategory: ?{|
    +category: ?{|
      +id: string;
      +label: ?string;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation updateCategoryMutation(
  $category: UpdateCategoryInput!
) {
  updateCategory(input: $category) {
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
        "type": "UpdateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "category",
            "type": "UpdateCategoryInput!"
          }
        ],
        "concreteType": "UpdateCategoryPayload",
        "name": "updateCategory",
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
  "name": "updateCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "category",
        "type": "UpdateCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateCategoryMutation",
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
            "type": "UpdateCategoryInput!"
          }
        ],
        "concreteType": "UpdateCategoryPayload",
        "name": "updateCategory",
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
  "text": "mutation updateCategoryMutation(\n  $category: UpdateCategoryInput!\n) {\n  updateCategory(input: $category) {\n    category {\n      id\n      label\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
