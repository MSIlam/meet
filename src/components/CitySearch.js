import { useState, useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];
    setQuery(value);
    setSuggestions(filteredLocations);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false);
    setCurrentCity(value);
  };

  return (
    <div
      id="city-search"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "200px",
      }}
    >
      <label
        htmlFor="city-search-input"
        style={{ color: "Honeydew", marginBottom: "10px" }}
      >
        Choose your nearest city:{" "}
      </label>
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
        style={{
          padding: "8px", // Added padding
          // Added font size
          border: "1px solid #ccc", // Added border
          borderRadius: "4px", // Added border radius
        }}
      />
      {showSuggestions ? (
        <ul
          className="suggestions"
          style={{ listStyleType: "none", padding: 0 }}
        >
          {suggestions.map((suggestion) => {
            return (
              <li
                onClick={handleItemClicked}
                key={suggestion}
                style={{
                  padding: "8px", // Added padding
                  borderBottom: "1px solid #ccc", // Added border bottom
                  cursor: "pointer", // Added cursor pointer
                  color: "Honeydew",
                }}
              >
                {suggestion}
              </li>
            );
          })}
          <li
            key="See all cities"
            onClick={handleItemClicked}
            style={{
              padding: "8px", // Added padding
              cursor: "pointer", // Added cursor pointer
              color: "Honeydew",
            }}
          >
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;