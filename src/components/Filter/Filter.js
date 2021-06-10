import { Component } from 'react';
// import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
// import styles from './Filter.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/ContactForm/ContactForm-actions';
import selectors from '../../redux/ContactForm/ContactForm-selectors';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Filter extends Component {
  render() {
    // const filterInputId = genId();
    const { filterState, onFilterChange } = this.props;
    return (
      <Form inline>
        <FormControl
          type="text"
          name="filter"
          value={filterState}
          onChange={onFilterChange}
          placeholder="Namen eingeben..."
          className="mr-sm-2"
        />
        <Button variant="primary">Suchen</Button>
      </Form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.string,
  onFilterChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filterState: selectors.getFilter(state),
  // filterState: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: event => dispatch(actions.filterChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
