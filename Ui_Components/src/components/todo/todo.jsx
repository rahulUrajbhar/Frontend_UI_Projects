"use client";
import "./todo.css";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [itemList, setItemList] = useState([]);

    // Get data from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem("todoList");
    if (savedItems) {
      setItemList(JSON.parse(savedItems));
    }
  }, []);

  // save data to local storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(itemList));
  }, [itemList]);

  function AddElememt() {
    if (text.trim() !== "") {
      setItemList([...itemList, { text: text, completed: false }]);
      setText("");
    }
  }
  function toggleCompletion(index) {
    const updatedItems = [...itemList];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItemList(updatedItems);
  }
  function handleListItem(index) {
    const updateList = itemList.filter((item, i) => i !== index);
    setItemList(updateList);
  }
  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="inputBtn">
        <input
          className="inputData"
          type="text"
          placeholder="Enter you task"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={AddElememt}>Add</button>
      </div>
      <ul>
        {itemList.map((item, index) => (
          <li key={index} className="itemList">
            <div className="checkboxText">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleCompletion(index)}
              />
              <span
                className="textSpace"
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            </div>
            <button onClick={() => handleListItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
