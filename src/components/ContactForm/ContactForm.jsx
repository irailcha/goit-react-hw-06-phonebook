
import React from 'react';
import { StyledForm, StyledField, SubmitButton } from './ContactForm.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const userSchema = yup.object().shape({
  name: yup.string().required().label("name"),
  number: yup.string().required().label('number'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const addContactHandler = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={userSchema} onSubmit={addContactHandler}>
      {({ handleSubmit, handleChange, values, errors }) => (
        <StyledForm autoComplete='off' onSubmit={handleSubmit}>
          <label htmlFor='name'> Name </label>
          <StyledField
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor='number'> Number </label>
          <StyledField
            type='tel'
            name='number'
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <SubmitButton type='submit'> Add contact </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );


};

export default ContactForm;

