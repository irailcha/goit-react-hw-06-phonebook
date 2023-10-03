import { combineReducers } from 'redux';
import contactsSlice from './contactsSlice';
import filterSlice from './filterSlice';

const reducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});

export default reducer;