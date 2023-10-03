import React from 'react';
import './Filter.styled';
import { FilterStyle } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';


const Filter = ({ name }) => {
  const dispatch = useDispatch();

  const changeContactHandler = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  const handleReset = () => {
    changeContactHandler('');
  };

  return (
    <FilterStyle>
      {
        <input
          type='text'
          name='Find contact'
          value={name}
          onChange={evt => changeContactHandler(evt.target.value)}
          placeholder='Filter'
        />
      }
      <button onClick={handleReset}>Reset filter</button>
    </FilterStyle>
  );
};


export default Filter;
