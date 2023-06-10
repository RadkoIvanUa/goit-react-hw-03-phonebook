import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';

import { Container } from './StyledContainer';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContactsArr = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (!localStorageContactsArr) {
      return;
    }
    this.setState({ contacts: localStorageContactsArr });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  heandleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredArr() {
    const filter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  setStateContacts = userData => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === userData.name.toLowerCase()
      )
    ) {
      toast.info(`${userData.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, userData],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
        <ContactForm createContactsArr={this.setStateContacts} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Filter onFilter={this.heandleFilter} filter={this.state.filter} />
        <ContactList
          FilteredArr={this.getFilteredArr()}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
