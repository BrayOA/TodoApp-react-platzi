import React from 'react';
import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue
}) {

    const handleInputChange = (event) => {
      setSearchValue(event.target.value);
    };

    return (
        <input 
            placeholder="Escribir pendientes" 
            className="t-search"
            value={searchValue}
            onChange={handleInputChange}
        />
    );
}

export { TodoSearch };