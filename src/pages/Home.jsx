import DataTableBase from "../components/data-table/DataTableBase";

import { useEffect, useMemo, useState } from "react";
import { FilterComponent } from "../components/data-table/FilterComponent";

import { Link } from "react-router-dom";

const Home = () => {
  const [tableData, setTableData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setTableData(data.users))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = tableData?.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle]);

  console.log(tableData);
  return (
    <div>
      <Link to={"/about"}>About The Page</Link>
      <DataTableBase
        data={filteredItems}
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeaderComponent={subHeaderComponentMemo}
      />
    </div>
  );
};

export default Home;
