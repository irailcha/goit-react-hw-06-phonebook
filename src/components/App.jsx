import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, removeContact} from '../redux/contactsSlice'; 
import { changeFilter, resetFilter} from '../redux/filterSlice'; 
import {SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle} from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import './App.styled';


const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedFilter = localStorage.getItem("contacts");
    if (savedFilter !== null) {
      const contact = JSON.parse(savedFilter);
      dispatch(addContact(contact)); 
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = newContact => {
    const { name, number } = newContact;
    const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContactData = {
      name: name,
      number: number,
      id: nanoid()
    };

    dispatch(addContact(newContactData)); 
  };

  const deleteContactHandler = contactId => {
    dispatch(removeContact(contactId)); 
  };

  const changeContactHandler = newContact => {
    dispatch(changeFilter(newContact));
  };

  const resetFilterHandler = () => {
    dispatch(resetFilter()); 
  };

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <SectionStyle>
      <TitleStyle>Phonebook</TitleStyle>
      <ContactForm addContact={addContactHandler} />
      <TitleContactsStyle>Contacts</TitleContactsStyle>
      <ContactListStyle>
        <Filter
          name={filter}
          changeContact={changeContactHandler}
          onReset={resetFilterHandler}
        />
        <ContactList
          onDelete={deleteContactHandler}
          contacts={filteredContacts}
        />
      </ContactListStyle>
      <GlobalStyle />
    </SectionStyle>
  );
}

export default App;

