import React from 'react';
import { PageHeader, Row, Col, Button, Alert } from 'react-bootstrap';
import BooksTable from './BooksTable';
import styles from './BooksAdmin.css';
import BookModal from './BookModal';
import SweetAlert from 'react-bootstrap-sweetalert';
import deleteBookMutation from './mutations/deleteBook';
import cryptoRandomString from 'crypto-random-string';

class BooksAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      tableKey: 'default',
      selected: null,
      removeCandidate: null,
      removeStatus: 'init',
      error: null
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
      tableKey: cryptoRandomString(12),
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

  requestConfirmation(book) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: book
    }));
  }

  cancelRemove() {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null
    }));
  }

  removeBook(book) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null,
      removeStatus: 'pending'
    }));
    deleteBookMutation(
      {id: book.id},
      response => {
        this.onSave(response.deleteBook.book)
      },
      err =>
        this.setState(prevState => ({
          ...prevState,
          error: err,
          removeStatus: 'failure'
        }))
    );
    this.setState(prevState => ({
      ...prevState,
      removeStatus: 'init'
    }))
  }

  render() {
    const { showModal, tableKey, selected, removeCandidate, removeStatus, error } = this.state;

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
          <BooksTable key={tableKey} onSelect={book => this.updateBook(book)} onDelete={book => this.requestConfirmation(book)} />
          <BookModal
            onCancel={() => this.hideModal()}
            show={showModal}
            book={selected}
            onSave={book => this.onSave(book)}
          />
          {removeCandidate && removeStatus === 'init' &&
          <SweetAlert
            warning
            showCancel
            title={`Delete "${removeCandidate.title}"?`}
            confirmBtnText={`Yes, Delete!`}
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            onConfirm={() => this.removeBook(removeCandidate)}
            onCancel={() => this.cancelRemove()} />}
            {removeStatus === 'failure' && <Row>
            <Alert bsStyle="danger">
              <h4>There was an error trying to delete the category.</h4>
              <p>{error}</p>
            </Alert>
          </Row>}
        </Row>
      </div>
    );
  }
}

export default BooksAdmin;
