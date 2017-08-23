/**
 * @flow
 * @relayHash 18f0c88ef1c0edd62f0880fbc408c7b7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type deleteCategoryMutationVariables = {|
  category: {
    id: string;
    clientMutationId?: ?string;
  };
|};

export type deleteCategoryMutationResponse = {|
  +deleteCategory: ?{|
    +category: ?{|
      +id: string;
    |};
    +clientMutationId: ?string;
  |};
|};
*/


/*
mutation deleteCategoryMutation(
  $category: DeleteCategoryInput!
) {
  deleteCategory(input: $category) {
    category {
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
        "name": "category",
        "type": "DeleteCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteCategoryMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "category",
            "type": "DeleteCategoryInput!"
          }
        ],
        "concreteType": "DeleteCategoryPayload",
        "name": "deleteCategory",
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
  "name": "deleteCategoryMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "category",
        "type": "DeleteCategoryInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "deleteCategoryMutation",
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
            "type": "DeleteCategoryInput!"
          }
        ],
        "concreteType": "DeleteCategoryPayload",
        "name": "deleteCategory",
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
  "text": "mutation deleteCategoryMutation(\n  $category: DeleteCategoryInput!\n) {\n  deleteCategory(input: $category) {\n    category {\n      id\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
