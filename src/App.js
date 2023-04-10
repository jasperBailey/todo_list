import { useState } from "react";
import "./App.css";

function App() {
  const [toDoItems, setToDoItems] = useState([
    {
      name: "Buy shopping",
      priority: "high",
    },
    {
      name: "Clean bathroom",
      priority: "low",
    },
    {
      name: "Car's MOT",
      priority: "high",
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const [newItemPriority, setNewItemPriority] = useState("");

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleNewItemPriorityChange = (event) => {
    setNewItemPriority(event.target.value);
  };

  const addNewItem = (event) => {
    event.preventDefault();
    const copyToDoItems = [...toDoItems];
    copyToDoItems.push({
      name: newItem,
      priority: newItemPriority
    });
    setToDoItems(copyToDoItems);
    setNewItem("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        {toDoItems.map((item) => {
          return (
            <li className={item.priority==='high' ? 'high-priority' : 'low-priority' }>
              <h3>{item.name}</h3>
            </li>
          );
        })}
      </ul>
      <form onSubmit={addNewItem}>
        <label htmlFor="new-item">Add a To Do: </label>

        <input
          type="text"
          id="new-item"
          value={newItem}
          onChange={handleNewItemChange}
        />

        <label htmlFor="high-priority">High</label>
        <input type="radio" id="high-priority" name="priority" value="high" onChange={handleNewItemPriorityChange}/>

        <label htmlFor="low-priority">Low</label>
        <input type="radio" id="low-priority" name="priority" value="low" onChange={handleNewItemPriorityChange}/>

        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
