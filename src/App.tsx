import { useState } from "react";
import "./App.css";
import ListItems from "./components/ListItems";

function App() {
  const [count, setCount] = useState(0);
  let toDoListContent = [
    "Do Laundry",
    "Study React",
    "Wash Dishes",
    "Skin Care",
  ];
  const getItems = toDoListContent.map((item: any) => {
    return <ListItems itemText={item} />;
  });

  return (
    <>
      <section className="todo-container">
        <h1>To Do List</h1>
        {getItems}
      </section>
    </>
  );
}

export default App;
