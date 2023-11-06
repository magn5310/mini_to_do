import ListItem from "./ListItem";

function List({ item }) {
  return (
    <div>
      <ul className="grid gap-1 bg-blue-800 p-1">
        {DataTransferItemList.map((item) => {
          <ListItem key={item.id} {...item}></ListItem>;
        })}
      </ul>
    </div>
  );
}

export default List;
