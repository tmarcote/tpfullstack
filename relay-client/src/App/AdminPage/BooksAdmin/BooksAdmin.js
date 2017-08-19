import React from 'react';
import { PageHeader, Row, Col, Button } from 'react-bootstrap';
import BooksTable from './BooksTable';
import styles from './BooksAdmin.css';
import BookModal from './BookModal';

class BooksAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      tableKey: 'default',
      selected: null,
      removeCandidate: null
    };
  }

  hideModal() {
    this.setState(prevState => ({
      ...prevState,
      showModal: false,
      selected: null
    }));
  }

  addBook() {
    this.setState(prevState => ({
      ...prevState,
      showModal: true
    }));
  }

  onSave(book) {
    this.setState(prevState => ({
      ...prevState,
      tableKey: book.id,
      showModal: false
    }));
  }

  updateBook(book) {
    this.setState(prevState => ({
      ...prevState,
      showModal: true,
      selected: book
    }));
  }

  render() {
    const { showModal, tableKey, selected, removeCandidate } = this.state;

    return (
      <div>
        <PageHeader>
          Books admin <small>Create, edit and remove books</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className={styles.mainAction}>
              <Button bsStyle="primary" bsSize="xs" onClick={() => this.addBook()}>
                New Book
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <BooksTable key={tableKey} onSelect={book => this.updateBook(book)}/>
          <BookModal
            onCancel={() => this.hideModal()}
            show={showModal}
            book={selected}
            onSave={book => this.onSave(book)}
          />
        </Row>
      </div>
    );
  }
}

export default BooksAdmin;
