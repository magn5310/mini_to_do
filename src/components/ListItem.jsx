function ListItem({ completed, id, task }) {
  return (
    <div className={"bg-blue-400 p-5 mb-5"}>
      <li className={completed && "line-through"}>
        {task} <button className="bg-slate-500 p-3 rounded text-white">Complete</button>
      </li>
    </div>
  );
}

export default ListItem;
