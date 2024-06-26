function SearchBar({ searchBar, handleSearchInput }) {
  return (
    <input
      className="p-2 border border-gray-400 rounded text-center"
      type="text"
      placeholder="Search characters..."
      value={searchBar}
      onChange={handleSearchInput}
    />
  );
}

export default SearchBar;
