import DataTable from "react-data-table-component";
import ExpendedComponent from "./ExpendedComponent";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "black",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  columns: {
    style: {
      overflow: "auto",
      scrollbarWidth: "none",
    },
  },
};

const conditionalRowStyles = [
  {
    when: (row) => row.gender === "male",
    style: {
      backgroundColor: "lightgreen",
    },
  },
  {
    when: (row) => row.gender === "female",
    style: {
      backgroundColor: "pink",
    },
  },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Avatar",
    selector: (row) => (
      <img
        src={row.image}
        style={{ width: "80px", height: "80px" }}
        alt={row.name}
      />
    ),
  },
  {
    name: "Name",
    selector: (row) => row.firstName + " " + row.lastName,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    cell: (row) => (
      <div
        style={{
          backgroundColor: row.age < 30 ? "yellow" : "lightblue",
          width: "25%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {row.age}
      </div>
    ),
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },
];

const ExpendableComponent = ({ data }) => {
  return (
    <ExpendedComponent
      address={data?.address}
      bloodGroup={data?.bloodGroup}
      department={data?.department}
      companyName={data?.companyName}
      title={data?.title}
    />
  );
};

const DataTableBase = ({
  data,
  paginationResetDefaultPage,
  subHeaderComponent,
}) => {
  return (
    <>
      {data !== null && (
        <DataTable
          title="Contact List"
          columns={columns}
          responsive
          pagination
          paginationResetDefaultPage={paginationResetDefaultPage}
          fixedHeader
          fixedHeaderScrollHeight="100vh"
          subHeader
          subHeaderComponent={subHeaderComponent}
          highlightOnHover
          customStyles={customStyles}
          conditionalRowStyles={conditionalRowStyles}
          pointerOnHover
          expandableRows
          expandableRowsComponent={ExpendableComponent}
          expandOnRowDoubleClicked
          data={data}
        />
      )}
    </>
  );
};

export default DataTableBase;
