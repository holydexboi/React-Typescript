import { useState } from "react";

interface ListGroupProps {
  items: string[];
  headinngs: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headinngs, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{headinngs}</h1>
      {items.length === 0 ? "No item available" : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
