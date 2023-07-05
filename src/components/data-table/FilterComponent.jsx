export const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    {/* <select onChange={onFilter} name="filter-by-category" id="filter-by-category">
      <option defaultChecked>Category</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select> */}
    <input
      style={{
        padding: "5px",
        border: "none",
        boxShadow: "1px 1px 5px black",
        "&:focus": {
          backgroundColor: "red !important",
        },
      }}
      id="search"
      type="text"
      placeholder="Filter By ..."
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button type="button" onClick={onClear}>
      X
    </button>
  </>
);
