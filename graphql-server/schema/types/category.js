const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');
const { connectionDefinitions, mutationWithClientMutationId } = require('graphql-relay');
const { nodeInterface } = require('../node');
const model = require('../../model');

const categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Represents a category of books',
  interfaces: [nodeInterface],
  isTypeOf: obj => obj._id.substr(0, 2) === 'CA',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The category unique id.',
      resolve: obj => obj._id
    },
    label: {
      type: GraphQLString,
      description: 'Category label.'
    }
  })
});

const createCategory = mutationWithClientMutationId({
  name: 'CreateCategory',
  inputFields: {
    label: {
      type: GraphQLString,
      description: 'The category name.'
    }
  },
  outputFields: {
    category: {
      type: categoryType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: categoryData => model.category.add(categoryData)
});

const updateCategory = mutationWithClientMutationId({
  name: 'UpdateCategory',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The category unique id.'
    },
    label: {
      type: GraphQLString,
      description: 'The category label.'
    }
  },
  outputFields: {
    category: {
      type: categoryType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: categoryData => model.category.update(categoryData)
});

const deleteCategory = mutationWithClientMutationId({
  name: 'DeleteCategory',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The category unique id.'
    }
  },
  outputFields: {
    category: {
      type: categoryType,
      resolve: payload => payload
    }
  },
  mutateAndGetPayload: ({ id }) => model.category.remove(id)
});

const { connectionType } = connectionDefinitions({ nodeType: categoryType });

exports.categoryType = categoryType;

exports.categoryMutation = {
  createCategory,
  updateCategory,
  deleteCategory
};

exports.categoryConnection = connectionType;
