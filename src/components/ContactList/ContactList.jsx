import React from 'react';
import './ContactList.styled';
import { ContactStyle, ContactListStyle, BtnDeleteStyle } from './ContactList.styled';
import { useDispatch, useSelector} from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const deleteContactHandler = (contactId) => {
    dispatch(removeContact(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(contact => (
        <ContactStyle key={contact.id}>
          {contact.name} : {contact.number}
          <BtnDeleteStyle onClick={() => deleteContactHandler(contact.id)}>Delete</BtnDeleteStyle>
        </ContactStyle>
      ))}
    </ContactListStyle>
  );
}

export default ContactList;


