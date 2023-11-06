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
      completed: false,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat);
  }
  return (
    <main className="bg-blue-100 h-screen p-48">
      <Form className="flex"></Form>
      <List></List>
    </main>
  );
}

export default App;
