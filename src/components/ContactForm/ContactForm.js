import { Component } from 'react';
// import { v4 as genId } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/ContactForm/ContactForm-operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class ContactForm extends Component {
  state = { name: '', semester: '' };

  reset = () => {
    this.setState({ name: '', semester: '' });
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentState = this.state;
    const updateState = { [name]: value };
    this.setState({ ...currentState, ...updateState });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    // const nameInputId = genId();
    // const telInputId = genId();

    return (
      <Form onSubmit={this.handleSubmit} className={styles.Form}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicSemester">
          <Form.Label>Semester</Form.Label>
          <Form.Control
            type="number"
            name="semester"
            placeholder="Semester"
            value={this.state.semester}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add student
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(operations.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
