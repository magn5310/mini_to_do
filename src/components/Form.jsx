function Form() {
  return (
    <form action="">
      <label htmlFor="inputText"></label>
      <input className="border-solid border border-black" id="inputText" type="text" />
      <button className="bg-slate-500 p-3 rounded text-white ml-2">Add</button>
    </form>
  );
}

export default Form;
