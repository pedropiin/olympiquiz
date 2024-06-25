import './SearchBar.css';

const SearchBar = ({ input, onChange, addAthlete, suggestions }) => {

    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e) {
            addAthlete(input);
        }
    }

    const handleSuggestion = (athlete) => {
        addAthlete(athlete.name);
    }

    return (
        <div className="search-bar-container">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Search for an Athlete..."
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    Search
                    <span id="search-icon">&#128269;</span>
                </button>
            </form>
            {suggestions.length > 0 && (<ul className="suggestion-list"> {suggestions.slice(0, 8).map((athlete, index) =>
            (<li key={index} onClick={() => handleSuggestion(athlete)} className="suggestion-item">
                {athlete.name}
            </li>
            ))}
            </ul>
            )}
        </div>
    );
}

export default SearchBar;
