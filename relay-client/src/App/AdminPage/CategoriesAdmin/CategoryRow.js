import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Relay, { graphql } from 'react-relay';
import PropTypes from 'prop-types';
import styles from './CategoryRow.css';
import {createFilter} from 'react-search-input';

const categoryFragment = graphql`
  fragment CategoryRow_category on Category {
    id
    label
  }
`;

const CategoryRow = ({ category, onSelect, onDelete, searchTerm }) => {
  
  const categories = [category]
  const filteredCategories = categories.filter(createFilter(searchTerm, ['label']))
  if(filteredCategories.length) {
    return(
      <tr key={filteredCategories[0].id}>
        <td>
          {filteredCategories[0].id}
        </td>
        <td>
          {filteredCategories[0].label}
        </td>
        <td>
          <ButtonToolbar className={styles.toolbar}>
            <Button bsStyle="info" bsSize="xsmall" onClick={() => onSelect(filteredCategories[0])}>
              Edit
            </Button>
            <Button bsStyle="danger" bsSize="xsmall" onClick={() => onDelete(filteredCategories[0])}>
              Remove
            </Button>
          </ButtonToolbar>
        </td>
      </tr>
    );
  } else {
    return (null);
  }
}


CategoryRow.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

export default Relay.createFragmentContainer(CategoryRow, categoryFragment);
