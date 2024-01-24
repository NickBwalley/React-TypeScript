// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event Handler - click event
  const handleClick = (event: MouseEvent) => console.log(event);
  const getMessage = () => {
    // return items.length === 0 ? <p>No items found!</p> : null;
    return items.length === 0 && <p>No items found!</p>;
  };

  return (
    <>
      <h1>List of Items</h1>
      {getMessage()}
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

export default ListGroup;
