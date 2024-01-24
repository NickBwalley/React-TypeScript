// import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const getMessage = () => {
    // return items.length === 0 ? <p>No items found!</p> : null;
    return items.length === 0 && <p>No items found!</p>;
  };

  return (
    <>
      <h1>List of Items</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
