import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import GlobalStyle from './GlobalStyle';
import { SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle } from './App.styled';


const App = ({ addContactHandler, deleteContactHandler, changeContactHandler, filter}) => {


  return (
    <SectionStyle>
      <TitleStyle> Phonebook </TitleStyle>
      <ContactForm addContact={addContactHandler} />
      <TitleContactsStyle> Contacts </TitleContactsStyle>
      <ContactListStyle>
        <Filter name={filter} changeContact={changeContactHandler} />
        <ContactList onDelete={deleteContactHandler} contacts={useSelector(selectVisibleContacts)} />
      </ContactListStyle>
      <GlobalStyle />
    </SectionStyle>
  );
};

export default App;