import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

// STYLES============================================
import { Form } from './StyledContactForm';
// ==================================================

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  heandlerChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  heandlerSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const user = {
      name: name,
      id: nanoid(),
      number: number,
    };
    this.props.createContactsArr(user);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.heandlerSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.heandlerChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            required
            onChange={this.heandlerChange}
          />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  createContactsArr: PropTypes.func.isRequired,
};
