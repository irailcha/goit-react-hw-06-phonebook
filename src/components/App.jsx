import React from 'react';
import { useSelector} from 'react-redux';

import { selectVisibleContacts } from '../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = ({addContactHandler, deleteContactHandler, changeContactHandler}) => {

  const visibleContacts = useSelector(selectVisibleContacts);



  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeContactHandler} />
      <ContactList contacts={visibleContacts} onDelete={deleteContactHandler} />
    </div>
  );
};

export default App;

