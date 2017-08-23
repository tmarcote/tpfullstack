import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';

const deleteBookMutation = graphql`
  mutation deleteBookMutation($book: DeleteBookInput!) {
    deleteBook(input: $book) {
      book {
        id
      }
      clientMutationId
    }
  }
`;

const deleteBook = (book, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: deleteBookMutation,
    variables: { book },
    onCompleted,
    onError
  });

export default deleteBook;
