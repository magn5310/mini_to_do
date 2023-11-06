import ListItem from "./ListItem";

function List({ items }) {
  return (
    <div>
      <h2>Min todo liste</h2>
      <ul className="grid gap-1 bg-blue-800 p-1">
        {items.map((item) => {
          <ListItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default List;
