import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      task: "Malke katten",
      completed: false,
      id: 1,
    },
    {
      task: "fodre katten",
      completed: true,
      id: 2,
    },
  ]);

  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }

  return (
    <main className="bg-blue-100 h-screen p-48">
      <Form addItem={addItem} className="flex"></Form>
      <List items={items}></List>
    </main>
  );
}

export default App;
