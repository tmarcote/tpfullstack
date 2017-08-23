import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';

const deleteCategoryMutation = graphql`
  mutation deleteCategoryMutation($category: DeleteCategoryInput!) {
    deleteCategory(input: $category) {
      category {
        id
      }
      clientMutationId
    }
  }
`;

const deleteCategory = (category, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: deleteCategoryMutation,
    variables: { category },
    onCompleted,
    onError
  });

export default deleteCategory;
