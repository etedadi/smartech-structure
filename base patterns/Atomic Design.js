// Button.js (Atom)
import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;

// FormField.js (Molecule)
import React from 'react';

const FormField = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input value={value} onChange={onChange} />
  </div>
);

export default FormField;

// SearchBar.js (Organism)
import React from 'react';
import FormField from './FormField';
import Button from './Button';

const SearchBar = ({ query, setQuery, onSearch }) => (
  <div>
    <FormField label="Search" value={query} onChange={e => setQuery(e.target.value)} />
    <Button onClick={onSearch}>Search</Button>
  </div>
);

export default SearchBar;

// SearchPage.js (Template)
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform search and update results
    fetch(`/api/search?q=${query}`)
      .then(response => response.json())
      .then(data => setResults(data));
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <div>
        {results.map(result => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
