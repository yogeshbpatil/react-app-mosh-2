import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Franscisco", "Tokyo", "London", "paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // list-group-item  active
            className={
              selectedIndex === index
                ? "list-group-item  active"
                : "list-group-item "
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
