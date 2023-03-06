import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Water the dog", priority: "low" },
    { name: "Rule the world", priority: "high" },
  ]);

  const [newTodoName, setNewTodoName] = useState("");

  const [priority, setPriority] = useState("low")

  function saveNewItem(event) {
    event.preventDefault();
    const newTodo = { name: newTodoName, priority: priority };
    const newTodos = [...todos, newTodo];
    setNewTodoName("");
    setTodos(newTodos);
  }
  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }
  function handleInputChange(event) {
    setNewTodoName(event.target.value);
  }

  const todoNodes = todos.map((item, index) => (
    <li className={item.priority} key={index}>{item.name} </li>
  ));
  return (
    <div className='app'>
      <h1>ToDos</h1>
      <form onSubmit={saveNewItem}>
        <input type="text" onChange={handleInputChange} value={newTodoName} />
        <label htmlFor='high'>High</label>
        <input type="radio" id="high" name="priority" value="high" onChange={handlePriorityChange} checked={priority === "high"} />
        <label htmlFor='low'>Low</label>
        <input type="radio" id="low" name="priority" value="low" onChange={handlePriorityChange} checked={priority === "low"} />
        <input type="submit" value="Save Item" />
      </form>
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}

export default App;
