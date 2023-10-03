import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.styled';
import { ContactStyle, ContactListStyle, BtnDeleteStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = ({onDelete}) => {
  const visibleContacts = useSelector(selectVisibleContacts);


  return (
    <ContactListStyle>
      {visibleContacts.map(contact => (
        <ContactStyle key={contact.id}>
          {contact.name} : {contact.number}
          <BtnDeleteStyle onClick={() => onDelete(contact.id)}>Delete</BtnDeleteStyle>
        </ContactStyle>
      ))}
    </ContactListStyle>
  );
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default ContactList;

