const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString, GraphQLNonNull } = require('graphql');
const { connectionArgs } = require('graphql-relay');
const { categoryType, categoryConnection, categoryMutation } = require('./types/category');
const { bookType, bookConnection, bookMutation } = require('./types/book');
const { nodeField } = require('./node');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    category: {
      type: categoryType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    categories: {
      type: new GraphQLList(categoryType)
    },
    book: {
      type: bookType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    books: {
      type: bookConnection,
      args: Object.assign(
        {
          categoryId: {
            type: GraphQLString
          }
        },
        connectionArgs
      )
    },
    node: nodeField
  })
});

var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createBook: bookMutation.createBook,
    updateBook: bookMutation.updateBook,
    deleteBook: bookMutation.deleteBook,
    createCategory: categoryMutation.createCategory,
    updateCategory: categoryMutation.updateCategory,
    deleteCategory: categoryMutation.deleteCategory
  })
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = schema;
