import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Alert } from 'react-bootstrap';
import createCategoryMutation from './mutations/createCategory';
import updateCategoryMutation from './mutations/updateCategory';

class CategoryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: props.category || {
        label: ''
      },
      loading: false,
      error: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { category } = nextProps;

    this.setState(prevState => ({
      ...prevState,
      category: category || {
        label: ''
      }
    }));
  }

  handleChange(e, key) {
    console.log('handleChange');
    const value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      category: {
        ...prevState.category,
        [key]: value
      }
    }));
  }

  handleSave() {
    const { category } = this.state;
    category.id ? this.update(category) : this.save(category);
  }

  save(category) {
    this.setState(prevState => ({
      ...prevState,
      loading: true,
      error: null
    }));
    createCategoryMutation(
      category,
      response => this.props.onSave(response.createCategory.category),
      err =>
        this.setState(prevState => ({
          ...prevState,
          loading: false,
          error: err
        }))
    );
    this.setState(prevState => ({
      ...prevState,
      loading: false,
    }))
  }

  update(category) {
    this.setState(prevState => ({
      ...prevState,
      loading: true,
      error: null
    }));
    updateCategoryMutation(
      category,
      response => this.props.onSave(response.updateCategory.category),
      err =>
        this.setState(prevState => ({
          ...prevState,
          loading: false,
          error: err
        }))
    );
    this.setState(prevState => ({
      ...prevState,
      loading: false,
    }))
  }

  render() {
    const { onCancel, show } = this.props;
    const { category, loading, error } = this.state;
    const edit = category && category.id;
    const title = edit ? 'Edit category' : 'Create category';

    return (
      <Modal show={show} onHide={() => onCancel()}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error &&
            <Alert bsStyle="warning">
              <strong>Error!</strong> {error}
            </Alert>}
          <form>
            <FormGroup controlId="categoryForm">
              <ControlLabel>Label</ControlLabel>
              <FormControl
                type="text"
                value={category.label}
                placeholder="category title"
                onChange={e => this.handleChange(e, 'label')}
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSave()} disabled={loading}>
            Save
          </Button>
          <Button onClick={() => onCancel()} disabled={loading}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CategoryModal;
