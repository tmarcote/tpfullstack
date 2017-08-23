import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Relay, { graphql } from 'react-relay';
import styles from './BookRow.css';

const bookFragment = graphql`
  fragment BookRow_book on Book {
    id
    title
    author
    image
    categories {
      id
      label
    }
  }
`;

const BookRow = ({ book, onSelect, onDelete }) =>
  <tr key={book.id}>
    <td>
      {book.id}
    </td>
    <td>
      {book.title}
    </td>
    <td>
      {book.author}
    </td>
    <td>
      <ButtonToolbar className={styles.toolbar}>
        <Button bsStyle="info" bsSize="xsmall" onClick={() => onSelect(book)}>
          Edit
        </Button>
        <Button bsStyle="danger" bsSize="xsmall" onClick={() => onDelete(book)}>
          Remove
        </Button>
      </ButtonToolbar>
    </td>
  </tr>;

export default Relay.createFragmentContainer(BookRow, bookFragment);
