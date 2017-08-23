import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';

const createCategoryMutation = graphql`
  mutation createCategoryMutation($category: CreateCategoryInput!) {
    createCategory(input: $category) {
      category {
        id
        label
      }
      clientMutationId
    }
  }
`;

const createCategory = (category, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: createCategoryMutation,
    variables: { category },
    onCompleted,
    onError
  });

export default createCategory;
