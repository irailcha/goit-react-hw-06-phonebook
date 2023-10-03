import { createSelector } from 'reselect';

const selectContacts = state => state.contacts.contacts;
const selectFilter = state => state.filter; 

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
