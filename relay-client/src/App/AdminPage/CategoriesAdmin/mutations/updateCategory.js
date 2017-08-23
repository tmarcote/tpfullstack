import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';

const updateCategoryMutation = graphql`
  mutation updateCategoryMutation($category: UpdateCategoryInput!) {
    updateCategory(input: $category) {
      category {
        id
        label
      }
      clientMutationId
    }
  }
`;

const updateCategory = (category, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: updateCategoryMutation,
    variables: { category },
    onCompleted,
    onError
  });

export default updateCategory;
