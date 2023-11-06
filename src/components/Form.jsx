function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    props.addItem({
      task: "Handle smør",
      completed: false,
      id: 3,
    });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="inputText">Opgave</label>
      <input required name="task" className="border-solid border border-black" id="inputText" type="text" />
      <button className="bg-slate-500 p-3 rounded text-white ml-2">Add</button>
    </form>
  );
}

export default Form;
