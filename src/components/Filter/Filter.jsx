import React from 'react';
import './Filter.styled';
import PropTypes from 'prop-types';
import { FilterStyle } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

const Filter = ({ name }) => {
  const dispatch = useDispatch();

  const changeContactHandler = newContact => {
    dispatch(changeFilter(newContact));
  };

  const onReset = () => {
    changeContactHandler('')
  };

  return (
    <FilterStyle>
      <input
        type='text'
        name='Find contact'
        value={name}
        onChange={evt => changeContactHandler(evt.target.value)}
        placeholder='Filter'
      />
      <button onClick={onReset}>Reset filter</button>
    </FilterStyle>
  );
};

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Filter;
