import environment from 'App/environment';
import { commitMutation, graphql } from 'react-relay';

const updateBookMutation = graphql`
  mutation updateBookMutation($book: UpdateBookInput!) {
    updateBook(input: $book) {
      book {
        id
        title
        author
        image
        categories {
          id
          label
        }
      }
      clientMutationId
    }
  }
`;

const updateBook = (book, onCompleted, onError) =>
  commitMutation(environment, {
    mutation: updateBookMutation,
    variables: { book },
    onCompleted,
    onError
  });

export default updateBook;
