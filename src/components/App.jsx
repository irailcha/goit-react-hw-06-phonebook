import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import GlobalStyle from './GlobalStyle';
import { SectionStyle, TitleStyle, TitleContactsStyle, ContactListStyle } from './App.styled';


const App = () => {


  return (
    <SectionStyle>
      <TitleStyle> Phonebook </TitleStyle>
      <ContactForm/>
      <TitleContactsStyle> Contacts </TitleContactsStyle>
      <ContactListStyle>
        <Filter />
        <ContactList />
      </ContactListStyle>
      <GlobalStyle />
    </SectionStyle>
  );
};

export default App;