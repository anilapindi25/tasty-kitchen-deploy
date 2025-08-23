const SortByOptions = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sortSelect" className="sort-label">Sort by</label>
      <select
        id="sortSelect"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="sort-select"
      >
        <option value="Lowest">Sort by Lowest</option>
        <option value="Highest">Sort by Highest</option>
      </select>
    </div>
  );
};

export default SortByOptions;
