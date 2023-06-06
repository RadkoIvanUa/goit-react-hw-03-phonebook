import { Component } from 'react';

import ContactForm from './contact-form/ContactForm';
import ContactList from './ContactList';
import Filter from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  heandleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredArr() {
    const filter = this.state.filter.toLowerCase();

    const filteredArr = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return filteredArr;
  }

  setStateContacts = userData => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === userData.name.toLowerCase()
      )
    ) {
      alert(`${userData.name} is already in contacts`);
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
      <>
        <h2>Phonebook</h2>
        <ContactForm createContactsArr={this.setStateContacts} />
        <h2>Contacts</h2>
        <Filter onFilter={this.heandleFilter} filter={this.state.filter} />
        <ContactList
          FilteredArr={this.getFilteredArr()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
