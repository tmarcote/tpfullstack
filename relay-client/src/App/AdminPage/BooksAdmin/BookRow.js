import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Relay, { graphql } from 'react-relay';
import styles from './BookRow.css';
import {createFilter} from 'react-search-input';

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

const BookRow = ({ book, onSelect, onDelete , searchTerm}) => {
  const books = [book];
  const filteredBooks = books.filter(createFilter(searchTerm, ['title', 'author']));
  if(filteredBooks.length) {
    return (
      <tr key={filteredBooks[0].id}>
        <td>
          {filteredBooks[0].id}
        </td>
        <td>
          {filteredBooks[0].title}
        </td>
        <td>
          {filteredBooks[0].author}
        </td>
        <td>
          <ButtonToolbar className={styles.toolbar}>
            <Button bsStyle="info" bsSize="xsmall" onClick={() => onSelect(filteredBooks[0])}>
              Edit
            </Button>
            <Button bsStyle="danger" bsSize="xsmall" onClick={() => onDelete(filteredBooks[0])}>
              Remove
            </Button>
          </ButtonToolbar>
        </td>
      </tr>
    );
  } else {
    return(null);
  }
}

export default Relay.createFragmentContainer(BookRow, bookFragment);
