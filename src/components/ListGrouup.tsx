function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "paris"];
  const handleClick = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
// 3.6 handling Events
export default ListGroup;
