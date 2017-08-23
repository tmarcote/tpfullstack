import React from 'react';
import { PageHeader, Row, Col, Button, Alert } from 'react-bootstrap';
import CategoriesTable from './CategoriesTable';
import styles from './CategoriesAdmin.css';
import CategoryModal from './CategoryModal';
import cryptoRandomString from 'crypto-random-string';
import SweetAlert from 'react-bootstrap-sweetalert';
import deleteCategoryMutation from './mutations/deleteCategory';

class CategoriesAdmin extends React.Component {
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

  addCategory() {
    this.setState(prevState => ({
      ...prevState,
      showModal: true
    }));
  }

  onSave(category) {
    this.setState(prevState => ({
      ...prevState,
      tableKey: cryptoRandomString(12),
      showModal: false
    }));
  }

  updateCategory(category) {
    this.setState(prevState => ({
      ...prevState,
      showModal: true,
      selected: category
    }));
  }

  requestConfirmation(category) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: category
    }));
  }

  cancelRemove() {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null
    }));
  }

  removeCategory(category) {
    this.setState(prevState => ({
      ...prevState,
      removeCandidate: null,
      removeStatus: 'pending'
    }));
    deleteCategoryMutation(
      {id: category.id},
      response => {
        this.onSave(response.deleteCategory.category)
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
          Categories admin <small>Create, edit and remove Categories</small>
        </PageHeader>

        <Row>
          <Col md={12}>
            <div className={styles.mainAction}>
              <Button bsStyle="primary" bsSize="xs" onClick={() => this.addCategory()}>
                New Category
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <CategoriesTable key={tableKey} onSelect={category => this.updateCategory(category)} onDelete={category => this.requestConfirmation(category)} />
          <CategoryModal
            onCancel={() => this.hideModal()}
            show={showModal}
            book={selected}
            onSave={category => this.onSave(category)}
          />
          {removeCandidate && removeStatus === 'init' &&
          <SweetAlert
            warning
            showCancel
            title={`Delete "${removeCandidate.label}"?`}
            confirmBtnText={`Yes, Delete!`}
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            onConfirm={() => this.removeCategory(removeCandidate)}
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

export default CategoriesAdmin;
