
function SearchBar({ searchBar, setSearchBar, setSearchName }) {
  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchBar(event.target.value);
    setSearchName(event.target.value);
  };

  return (
    <input
      className="p-2 border border-gray-400 rounded text-center w-96"
      type="text"
      placeholder="Search characters..."
      value={searchBar}
      onChange={handleSearchInput}
    />
  );
}

export default SearchBar;
