import './App.css';
import Main from './js/main';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, increase, addTodo } from "./redux/index";
import TodoList from "./components/Todolist";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
