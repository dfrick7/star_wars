import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='tc pa3 ba-white bg-yellow'
        type='search'
        placeholder='Search Star Wars'
        onChange={ searchChange }
      />
    </div>
  );
}

export default SearchBox;
