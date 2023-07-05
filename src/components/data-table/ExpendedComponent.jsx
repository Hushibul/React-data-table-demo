const ExpendedComponent = ({
  address,
  bloodGroup,
  department,
  companyName,
  title,
}) => {
  console.log(address);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>{address.address}</p>
      <p>{bloodGroup}</p>
      <p>{department}</p>
      <p>{companyName}</p>
      <p>{title}</p>
    </div>
  );
};

export default ExpendedComponent;
