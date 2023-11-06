function ListItem({ completed, id, task }) {
  return (
    <div className=" bg-blue-400 p-5">
      <li className="mb-5">
        {task} <button className="bg-slate-500 p-3 rounded text-white">Complete</button>
      </li>
    </div>
  );
}

export default ListItem;
