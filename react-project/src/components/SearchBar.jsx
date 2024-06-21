import React from 'react';

const SearchBar = ({input, onChange}) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
      };

    const BarStyling = {width:"500px",background:"#F2F1F9", border:"", padding:"0.5rem"
                        ,rigth:"50rem", border_radius:"1px"};
    const ButtonStyling = {right:"55rem"}
    
    return (
        <form className="search-bar">
            <input 
                type="text"
                style={BarStyling}
                value={input}
                placeholder={"Search for an Athlete"}
                onChange={handleInputChange}
                className="search-input"
                />

            <button 
                type="submit"
                className="search-button" 
                style={ButtonStyling}
                // Falta alterar o OnClick
                >Search</button>

        </form>
        
    );
}

export default SearchBar