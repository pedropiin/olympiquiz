import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import dataService from './dataService';

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setInput(value);
    dataService.fetchData(value).then(results => setResults(results));
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
